/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.topcloset.gr"
      }
    ]
  }
};

export default nextConfig;
