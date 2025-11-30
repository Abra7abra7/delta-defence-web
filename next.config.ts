import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-fba9313f1cf044bcbdc5f91f57a0ac27.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);


