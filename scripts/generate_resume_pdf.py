from __future__ import annotations

from dataclasses import dataclass, field
from io import BytesIO
from pathlib import Path
from typing import List
from xml.sax.saxutils import escape

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "resume-source.md"
OUTPUT = ROOT / "public" / "resume.pdf"


@dataclass
class Entry:
    title: str
    subtitle: str
    dates: str
    bullets: List[str] = field(default_factory=list)


def parse_resume(path: Path) -> dict:
    lines = path.read_text(encoding="utf-8").splitlines()
    index = 0

    def current() -> str:
        return lines[index]

    def skip_blank() -> None:
        nonlocal index
        while index < len(lines) and not lines[index].strip():
            index += 1

    def take_nonempty() -> str:
        nonlocal index
        skip_blank()
        value = lines[index].strip()
        index += 1
        return value

    data: dict = {
        "name": "",
        "title": "",
        "contact": "",
        "summary": "",
        "experience": [],
        "strengths": [],
        "education": [],
    }

    data["name"] = take_nonempty().removeprefix("# ").strip()
    data["title"] = take_nonempty()
    data["contact"] = take_nonempty()

    summary_lines: List[str] = []
    while index < len(lines) and not lines[index].startswith("## "):
        if lines[index].strip():
            summary_lines.append(lines[index].strip())
        index += 1
    data["summary"] = " ".join(summary_lines)

    while index < len(lines):
        skip_blank()
        if index >= len(lines):
            break

        heading = take_nonempty().removeprefix("## ").strip().upper()

        if heading in {"EXPERIENCE", "EDUCATION"}:
            entries: List[Entry] = []
            while index < len(lines):
                skip_blank()
                if index >= len(lines) or lines[index].startswith("## "):
                    break
                title = take_nonempty().removeprefix("### ").strip()
                subtitle = take_nonempty()
                dates = take_nonempty()
                bullets: List[str] = []
                while index < len(lines):
                    if not lines[index].strip():
                        index += 1
                        if index < len(lines) and lines[index].startswith("### "):
                            break
                        continue
                    if lines[index].startswith("## ") or lines[index].startswith("### "):
                        break
                    if lines[index].startswith("- "):
                        bullets.append(lines[index][2:].strip())
                    index += 1
                entries.append(Entry(title=title, subtitle=subtitle, dates=dates, bullets=bullets))
            data[heading.lower()] = entries
            continue

        if heading in {"SELECTED STRENGTHS", "SKILLS"}:
            strengths: List[str] = []
            while index < len(lines):
                skip_blank()
                if index >= len(lines) or lines[index].startswith("## "):
                    break
                if lines[index].startswith("- "):
                    strengths.append(lines[index][2:].strip())
                index += 1
            data["strengths"] = strengths

    return data


def make_styles(body_size: float) -> dict:
    sample = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=sample["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=17.5,
            leading=19,
            textColor=colors.HexColor("#1f2933"),
            alignment=TA_LEFT,
            spaceAfter=2,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=sample["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=10.3,
            leading=12,
            textColor=colors.HexColor("#3f6f6b"),
            spaceAfter=2,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=10.2,
            textColor=colors.HexColor("#5d6a75"),
            spaceAfter=5,
        ),
        "summary": ParagraphStyle(
            "Summary",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=body_size,
            leading=body_size + 2.1,
            textColor=colors.HexColor("#33424d"),
            spaceAfter=7,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=sample["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=9.8,
            leading=11.5,
            textColor=colors.HexColor("#1f2933"),
            spaceBefore=3,
            spaceAfter=4,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=sample["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=9.8,
            leading=11.2,
            textColor=colors.HexColor("#1f2933"),
        ),
        "company": ParagraphStyle(
            "Company",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=10.8,
            textColor=colors.HexColor("#33424d"),
        ),
        "dates": ParagraphStyle(
            "Dates",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=10.4,
            alignment=TA_RIGHT,
            textColor=colors.HexColor("#5d6a75"),
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=body_size - 0.2,
            leading=body_size + 1.7,
            leftIndent=10,
            firstLineIndent=-8,
            bulletIndent=0,
            textColor=colors.HexColor("#33424d"),
            spaceAfter=1.4,
        ),
        "strength": ParagraphStyle(
            "Strength",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=body_size - 0.1,
            leading=body_size + 1.8,
            leftIndent=8,
            firstLineIndent=-8,
            bulletIndent=0,
            textColor=colors.HexColor("#33424d"),
            spaceAfter=1.3,
        ),
        "education": ParagraphStyle(
            "Education",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=10.8,
            textColor=colors.HexColor("#33424d"),
        ),
    }


def format_contact(value: str) -> str:
    parts = []
    for raw_part in value.split(" | "):
        part = raw_part.strip()
        safe_part = escape(part)
        if "@" in part and " " not in part:
            parts.append(f'<link href="mailto:{safe_part}">{safe_part}</link>')
        elif part.startswith("linkedin.com/"):
            parts.append(f'<link href="https://{safe_part}">{safe_part}</link>')
        elif part.endswith(".vercel.app"):
            parts.append(f'<link href="https://{safe_part}">{safe_part}</link>')
        else:
            parts.append(safe_part)
    return " &nbsp;|&nbsp; ".join(parts)


def build_story(data: dict, body_size: float):
    styles = make_styles(body_size)
    date_width = 1.45 * inch
    content_width = 5.25 * inch
    story = [
        Paragraph(escape(data["name"]), styles["name"]),
        Paragraph(escape(data["title"]), styles["title"]),
        Paragraph(format_contact(data["contact"]), styles["contact"]),
        Paragraph(escape(data["summary"]), styles["summary"]),
        Paragraph("EXPERIENCE", styles["section"]),
    ]

    for entry in data["experience"]:
        header = Table(
            [
                [
                    Paragraph(escape(entry.title), styles["role"]),
                    Paragraph(escape(entry.dates).replace(" ", "&nbsp;"), styles["dates"]),
                ],
                [
                    Paragraph(escape(entry.subtitle), styles["company"]),
                    "",
                ],
            ],
            colWidths=[content_width, date_width],
            hAlign="LEFT",
        )
        header.setStyle(
            TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                    ("TOPPADDING", (0, 0), (-1, -1), 0),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ]
            )
        )
        story.append(header)
        story.append(Spacer(1, 3))
        for bullet in entry.bullets:
            story.append(
                Paragraph(f"-&nbsp; {escape(bullet)}", styles["bullet"])
            )
        story.append(Spacer(1, 4))

    story.append(Paragraph("SKILLS", styles["section"]))
    for strength in data["strengths"]:
        if ":" in strength:
            label, value = strength.split(":", 1)
            text = f"-&nbsp; <b>{escape(label.strip())}</b>: {escape(value.strip())}"
        else:
            text = f"-&nbsp; {escape(strength)}"
        story.append(Paragraph(text, styles["strength"]))
    story.append(Spacer(1, 4))

    story.append(Paragraph("EDUCATION", styles["section"]))
    for entry in data["education"]:
        header = Table(
            [
                [
                    Paragraph(escape(entry.title), styles["role"]),
                    Paragraph(escape(entry.dates).replace(" ", "&nbsp;"), styles["dates"]),
                ],
                [
                    Paragraph(escape(entry.subtitle), styles["education"]),
                    "",
                ],
            ],
            colWidths=[content_width, date_width],
            hAlign="LEFT",
        )
        header.setStyle(
            TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                    ("TOPPADDING", (0, 0), (-1, -1), 0),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ]
            )
        )
        story.append(header)
    return story


def render_pdf(data: dict, body_size: float) -> bytes:
    buffer = BytesIO()
    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        leftMargin=0.53 * inch,
        rightMargin=0.53 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.48 * inch,
        title=f"{data['name']} Resume",
        author=data["name"],
    )
    doc.build(build_story(data, body_size))
    return buffer.getvalue()


def main() -> None:
    data = parse_resume(SOURCE)

    pdf_bytes = b""
    chosen_size = 9.35
    chosen_pages = 99
    for candidate in (9.45, 9.35, 9.2, 9.0, 8.85):
        result = render_pdf(data, candidate)
        pages = len(PdfReader(BytesIO(result)).pages)
        pdf_bytes = result
        chosen_size = candidate
        chosen_pages = pages
        if pages <= 1:
            break

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_bytes(pdf_bytes)
    print(f"Wrote {OUTPUT} with {chosen_pages} page(s) at body size {chosen_size}")


if __name__ == "__main__":
    main()
