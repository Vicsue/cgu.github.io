const pathPrefix =
  process.env.NODE_ENV === 'production' ? '/cgu.github.io' : '';

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};
