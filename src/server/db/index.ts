import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import { DATABASE_URL } from '@/lib/env';

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: DATABASE_URL
});

// Create a Drizzle instance
export const db = drizzle(pool, {
  schema
});
