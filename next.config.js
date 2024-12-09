

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
  openAnalyzer: false,
});
const removeImports = require("next-remove-imports")();

const nextConfig = {
  swcMinify: true,

  transpilePackages: [
    "@mdxeditor/editor",
    'antd',
    '@ant-design/icons',
    '@ant-design/icons-svg',
    'rc-util',
    'rc-notification',
    'rc-pagination',
    "rc-picker",
    "rc-tree",
    'rc-table',
    "rc-tooltip"
  ],
  experimental: {
    esmExternals: 'loose',
  },
  images: {
    formats: ["image/webp"],
    domains: [
      "i.postimg.cc",
      "ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com",
      "www.schoolshub.ai",
      "lh3.googleusercontent.com",
      "media.licdn.com",
      "scontent.fdac23-1.fna.fbcdn.net",
      "scontent-sin6-1.xx.fbcdn.net",
      "scontent-sin6-4.xx.fbcdn.net",
      "scontent-sin6-3.xx.fbcdn.net",
      "ts4u.us",
      "media.licdn.com",
      "i.ibb.co",
    ],
  },

  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};
module.exports = removeImports(nextConfig);



// module.exports = (phase, { defaultConfig }) => {
//   return withBundleAnalyzer({
//     ...defaultConfig,
//     reactStrictMode: true,
//     images: {
//       formats: ["image/webp"],
//       domains: [
//         "i.postimg.cc",
//         "ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com",
//         "www.schoolshub.ai",
//         "lh3.googleusercontent.com",
//         "media.licdn.com",
//         "scontent.fdac23-1.fna.fbcdn.net",
//         "scontent-sin6-1.xx.fbcdn.net",
//         "scontent-sin6-4.xx.fbcdn.net",
//         "scontent-sin6-3.xx.fbcdn.net",
//         "ts4u.us",
//         "media.licdn.com",
//         "i.ibb.co",
//       ],
//     },
//   });
// };
