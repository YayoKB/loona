/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coverartarchive.org",
      },
      {
        protocol: "https",
        hostname: "*.wikia.nocookie.net",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
        pathname: "/wp/wp7516851.jpg",
      },
      {
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
        pathname: "/i/u/3c28b231a889d2582978174cdad2e4e6.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
