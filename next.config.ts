import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-15874316f260469095939a16da3bf7c7.r2.dev",
        pathname: "/delta_defence_assets/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);


