/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  outDir: './out',
  async generateStaticParams() {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  },
}
