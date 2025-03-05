import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // custom loader results in 'feature not enabled' resp from sb so disabling for now
    // loader: "custom",
    // loaderFile: "/utils/supabase/supabase-image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fysvpznwbdceugzufbnd.supabase.co",
        port: "",
        pathname: "/storage/v1/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
