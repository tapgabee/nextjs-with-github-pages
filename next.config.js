const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,

  // Use the prefix in production and not development.
  assetPrefix: isProd ? '/nextjs-with-github-pages/' : '',

  // Image Optimization using Next.js' default loader is not compatible with `next export`.
  images: {
    loader: 'imgix',
    path: '/',
  },
};
