module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://valcineijr-portfolio.vercel.app/:path*',
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['media.giphy.com', 'github.com', 'lh3.googleusercontent.com'],
  },
};
