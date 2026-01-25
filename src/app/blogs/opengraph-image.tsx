import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "linear-gradient(135deg, #3f7fda 0%, #2f66b8 55%, #0b1020 100%)",
          color: "#ffffff",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: 24, opacity: 0.95 }}>Q-Prac</div>
          <div
            style={{
              fontSize: 18,
              opacity: 0.9,
              padding: "10px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            Blog
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 78, fontWeight: 900, lineHeight: 1.05 }}>
            Q-Prac Blog
          </div>
          <div style={{ fontSize: 28, opacity: 0.92 }}>
            Practical quantum notes — what’s real today, what isn’t.
          </div>
        </div>

        <div style={{ fontSize: 18, opacity: 0.9 }}>
          Searchable posts • summaries • full articles
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
