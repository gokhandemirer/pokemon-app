/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    FETCH_LIMIT: process.env.FETCH_LIMIT,
  },
  output: "standalone",
};

export default nextConfig;
