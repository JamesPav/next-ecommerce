/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.topcloset.gr"
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com"
      },

    ]
  }
};

export default nextConfig;
