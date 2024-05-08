/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgv3.fotor.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
