/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  },
}
