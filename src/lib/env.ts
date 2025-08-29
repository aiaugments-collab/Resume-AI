/**
 * Environment Configuration with Fallbacks
 * 
 * This file provides fallback values for environment variables to make
 * the project easier to run without requiring users to set up their own
 * environment variables. These are safe to use for development/demo purposes.
 */

// Database Configuration
export const DATABASE_URL = process.env.DATABASE_URL || 
  "postgresql://neondb_owner:npg_Vczd9Yrl3GyI@ep-lucky-forest-adrah2by-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

// Clerk Authentication
export const NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 
  "pk_test_dXNhYmxlLWdvbGRmaXNoLTg5LmNsZXJrLmFjY291bnRzLmRldiQ";

export const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY || 
  "sk_test_UAKmFTuR9jAF5Y93T9nY6mXsuVIwrIClfdxnMug1Mf";

// Clerk Redirect URLs
export const NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL || 
  "/welcome";

export const NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL || 
  "/welcome";

// Google Gemini AI
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 
  "AIzaSyCNavdb7Ws3EPwjDsy4j5P9VqxyKyW8wTY";

// Cloudinary Configuration
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 
  "dogcsr680";

export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || 
  "154577213951948";

export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || 
  "u5q3f1G1yVjeAvbrZHjrxcNBwDE";

export const CLOUDINARY_URL = process.env.CLOUDINARY_URL || 
  "cloudinary://154577213951948:u5q3f1G1yVjeAvbrZHjrxcNBwDE@dogcsr680";

// GitHub OAuth (Optional)
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || "";
export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || "";

// Helper function to check if we're using fallback values
export const isUsingFallbackEnv = () => {
  return !process.env.DATABASE_URL || 
         !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 
         !process.env.GEMINI_API_KEY;
};

// Log warning if using fallback values (only in development)
if (typeof window === 'undefined' && process.env.NODE_ENV === 'development') {
  if (isUsingFallbackEnv()) {
    console.log('🔧 Using fallback environment variables for easy setup');
    console.log('💡 To use your own environment, create a .env file with your own keys');
  }
}
