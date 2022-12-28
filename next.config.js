require('dotenv').config();

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
    unstable_flexsearch: true
})

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    compiler: {
        emotion: true,
    },
    // reactStrictMode: true,
    poweredByHeader: false,
    images: {
    },
    compress: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['localhost', '*','vorlefan.com'],
        formats: ['image/avif', 'image/webp'],
        
    },
};


module.exports = withNextra(nextConfig);
