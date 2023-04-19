/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    domains : [
      "i.scdn.co",
      "lh3.googleusercontent.com"
    ]
  },
}

module.exports = nextConfig
