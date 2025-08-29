/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com',
        port: ''
      }
    ]
  },
  transpilePackages: ['geist'],
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  // Set fallback environment variables for easy setup
  env: {
    DATABASE_URL: process.env.DATABASE_URL || 
      "postgresql://neondb_owner:npg_Vczd9Yrl3GyI@ep-lucky-forest-adrah2by-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 
      "pk_test_dXNhYmxlLWdvbGRmaXNoLTg5LmNsZXJrLmFjY291bnRzLmRldiQ",
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || 
      "sk_test_UAKmFTuR9jAF5Y93T9nY6mXsuVIwrIClfdxnMug1Mf",
    NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL || 
      "/welcome",
    NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL || 
      "/welcome",
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || 
      "AIzaSyCNavdb7Ws3EPwjDsy4j5P9VqxyKyW8wTY",
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || 
      "dogcsr680",
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || 
      "154577213951948",
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || 
      "u5q3f1G1yVjeAvbrZHjrxcNBwDE",
    CLOUDINARY_URL: process.env.CLOUDINARY_URL || 
      "cloudinary://154577213951948:u5q3f1G1yVjeAvbrZHjrxcNBwDE@dogcsr680"
  }
  // experimental: {
  //   reactCompiler: true
  // }
};

module.exports = nextConfig;
