import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

// Fallback database URL for easy setup
const DATABASE_URL = process.env.DATABASE_URL || 
  "postgresql://neondb_owner:npg_Vczd9Yrl3GyI@ep-lucky-forest-adrah2by-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

export default defineConfig({
  out: './drizzle',
  schema: './src/server/db/schema/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: DATABASE_URL
  }
});
