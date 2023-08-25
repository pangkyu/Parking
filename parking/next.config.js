/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/dataList",
        destination: `https://jsonplaceholder.typicode.com/users`,
      },
      {
        source: "/api/parkingList/:start/:end",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:start/:end`,
      },
    ];
  },
};

module.exports = nextConfig;
