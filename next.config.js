const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,

  // Use the basePath and prefix in production and not development.
  basePath: isProd ? '/nextjs-with-github-pages' : '',
  assetPrefix: isProd ? '/nextjs-with-github-pages/_next/static/images/' : '',
};
