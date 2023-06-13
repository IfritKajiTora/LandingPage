/* @type {import('next').NextConfig} */
/*const nextConfig = {
  experimental: {
    appDir: true,
  },
}*/

/*const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);*/


/*const nextConfig = withNextIntl({
  experimental: {appDir: true}
});*/

/*module.exports = nextConfig*/

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  experimental: {appDir: true}
});
