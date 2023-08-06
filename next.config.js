/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  // Your other Next.js configurations go here, if any.
  // For example, you can set up custom routes, environment variables, etc.

  // Add the following configuration to enable static HTML export.
  // It disables server-side rendering (SSR) and client-side navigation for static exports.
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add other routes as needed.
      // Example: '/about': { page: '/about' },
      // '/contact': { page: '/contact' },
    };
  },

  // If you have any other Next.js configurations, include them here as well.
};
