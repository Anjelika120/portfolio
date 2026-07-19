import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = portfolio.seo.socialImageAlt;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#f7f8f4",
          color: "#16201f"
        }}
      >
        <div style={{ fontSize: 30, color: "#3a7069" }}>
          {`${portfolio.person.name} · ${portfolio.person.title}`}
        </div>
        <div style={{ marginTop: 28, maxWidth: 980, fontSize: 72, lineHeight: 1.05 }}>
          {portfolio.person.intro}
        </div>
      </div>
    ),
    size
  );
}
