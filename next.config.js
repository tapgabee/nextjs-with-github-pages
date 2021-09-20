const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,

  assetPrefix: isProd
    ? 'https://cdn.statically.io/gh/tapgabee/nextjs-with-github-pages/gh-pages/'
    : '',
};
