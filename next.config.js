/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.postimg.cc",
      "ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com",
      "www.schoolshub.ai",
    ],
  },
};

module.exports = nextConfig;
