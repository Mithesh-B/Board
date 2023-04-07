/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  env:{
    GOOGLE_ID: "195077202653-hfl0j2nea0746mn9c94hgue7gj8fskl4.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
  }
}

module.exports = nextConfig
