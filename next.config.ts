import type { NextConfig } from "next";

const PRIMARY = "qupracs.cloudkarya.com";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        destination: `https://${PRIMARY}/:path*`,
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
