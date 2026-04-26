import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(246,242,234,1) 0%, rgba(255,253,249,1) 100%)",
          color: "#1f2933",
          padding: "64px",
          justifyContent: "space-between",
          alignItems: "stretch",
          fontFamily: "Segoe UI"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "72%"
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#3f6f6b"
            }}
          >
            Portfolio
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "flex", fontSize: 72, fontWeight: 600, lineHeight: 1.05 }}>
              {portfolio.person.name}
            </div>
            <div style={{ display: "flex", fontSize: 30, lineHeight: 1.35, color: "#4f5f6b" }}>
              {portfolio.person.title}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#4f5f6b", maxWidth: "90%" }}>
            {portfolio.person.intro}
          </div>
        </div>

        <div
          style={{
            width: 220,
            borderRadius: 36,
            background: "#3f6f6b",
            opacity: 0.12
          }}
        />
      </div>
    ),
    size
  );
}
