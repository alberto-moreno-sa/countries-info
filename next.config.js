const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const pjson = require('./package.json');
const localeSubpaths = {
  en: 'en',
};

const { i18n } = require('./next-i18next.config');

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  i18n,
  swcMinify: false,
  rewrites: async () => [
    {
      source: '/',
      destination: '/',
    },
  ],
  publicRuntimeConfig: {
    localeSubpaths,
  },
  generateBuildId: async () => {
    return pjson.version;
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Version',
            value: pjson.version,
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1;mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=16000000;includeSubDomains;preload',
          },
        ],
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
    }

    return config;
  },
});
