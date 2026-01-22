import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "wtfkcmctlrgnsjacnulb.supabase.co",
      port: "",
      pathname: "/storage/v1/object/public/alina_art/**"
    }]
  }
};

export default nextConfig;
