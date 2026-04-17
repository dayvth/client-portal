/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Libera domínios de imagens externas se um dia você usar (Supabase Storage, Unsplash, etc.)
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
};

module.exports = nextConfig;
