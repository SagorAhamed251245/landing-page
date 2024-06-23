const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
  openAnalyzer: false,
});

module.exports = (phase, { defaultConfig }) => {
  return withBundleAnalyzer({
    ...defaultConfig,
    reactStrictMode: true,
    images: {
      domains: [
        "i.postimg.cc",
        "ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com",
        "www.schoolshub.ai",
      ],
    },
  });
};
