import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type CaseOpenGraphImageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return portfolio.selectedWork.map((project) => ({
    id: project.id
  }));
}

export default async function CaseOpenGraphImage({ params }: CaseOpenGraphImageProps) {
  const { id } = await params;
  const project = portfolio.selectedWork.find((item) => item.id === id);

  if (!project) {
    throw new Error(`Unknown portfolio case: ${id}`);
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f7f8f4",
          color: "#16201f"
        }}
      >
        <div style={{ fontSize: 30, color: "#3a7069" }}>
          {`${portfolio.person.name} · ${portfolio.person.title}`}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ maxWidth: 1020, fontSize: 64, lineHeight: 1.05 }}>{project.caseTitle}</div>
          <div style={{ marginTop: 30, fontSize: 28, color: "#3a7069" }}>{project.impactLabel}</div>
        </div>
      </div>
    ),
    size
  );
}
