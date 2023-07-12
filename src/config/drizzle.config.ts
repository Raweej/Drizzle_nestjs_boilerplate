// db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import 'dotenv/config';

const clientConnect = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(clientConnect);

export const DRIZZLE_ORM = 'DRIZZLE_ORM';
