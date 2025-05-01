/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //     domains: ['images.unsplash.com', 'res.cloudinary.com']
  // }
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
