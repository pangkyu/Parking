/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/dataList",
        destination: `https://jsonplaceholder.typicode.com/users`,
      },
    ];
  },
};

module.exports = nextConfig;
