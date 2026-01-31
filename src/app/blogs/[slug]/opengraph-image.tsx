import { ImageResponse } from "next/og";
import { getAnyBlogPostBySlug } from "@/content/allBlogPosts";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getAnyBlogPostBySlug(slug)?.meta;

  const title = post?.title ?? "QuPracs Blog";
  const subtitle = post
    ? "QuPracs • Practical quantum notes"
    : "Practical quantum notes";

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
          <div style={{ fontSize: 24, opacity: 0.95 }}>QuPracs</div>
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
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.06 }}>
            {title}
          </div>
          <div style={{ fontSize: 26, opacity: 0.92 }}>{subtitle}</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 18, opacity: 0.9 }}>
            QuPracs • honest constraints • reproducible workflows
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#f6c945",
              }}
            />
            <div style={{ fontSize: 18, opacity: 0.9 }}>quantum-as-a-service</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
