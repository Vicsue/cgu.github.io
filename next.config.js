const prod = process.env.NODE_ENV === 'production';
module.exports = {
  basePath: '/cgu.github.io',
  assetPrefix: '/cgu.github.io',
  //assetPrefix: '',
  'process.env.BACKEND_URL': prod ? '/Next-React-Components' : '',
};
