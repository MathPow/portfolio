/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async generateStaticParams() {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  },
}
