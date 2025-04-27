/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    // remotePatterns: [
    // {
    //   protocol: 'https',
    //   hostname: 'encrypted-tbn0.gstatic.com',
    //   port: '',
    //   // pathname: '/',
    // },
    // {
    //   protocol: 'https',
    //   hostname: 'static.historiadomundo.com.br',
    //   port: '',
    //   // pathname: '/',
    // },
    // {
    //   protocol: 'https',
    //   hostname: 'logicc-tecnologia-s3.s3.amazonaws.com',
    //   port: '',
    //   pathname: '/system/user_default.webp',
    // },
    // ],
  },
  reactStrictMode: false,
  trailingSlash: true,
};
export default nextConfig;
