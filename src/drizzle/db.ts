// db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { users } from './schema';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '@/constants/environment/config';

const configService = new ConfigService();
const connectionString = configService.get<DatabaseConfig>('database.url');

const client = new Pool({
  connectionString: 'postgres://postgres:1234@localhost:5432/postgres',
});

export const db = drizzle(client);
