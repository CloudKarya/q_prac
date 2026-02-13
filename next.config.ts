import type { NextConfig } from "next";

const PRIMARY = "www.qupracs.com";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/consulting",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/consulting/:path*",
        destination: "/services/:path*",
        permanent: true,
      },
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
