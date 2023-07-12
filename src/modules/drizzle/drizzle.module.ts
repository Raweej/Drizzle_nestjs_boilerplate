import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../../drizzle/schema';
import { DatabaseConfig } from '@/constants/environment/config';
import { db, DRIZZLE_ORM } from '@/config/drizzle.config';

@Module({
  providers: [
    {
      provide: DRIZZLE_ORM,
      // useValue: db,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const connectionString = configService.get<string>('database.url');
        const pool = new Pool({
          connectionString: connectionString,
        });

        return drizzle(pool, { schema });
      },
    },
  ],
  exports: [DRIZZLE_ORM],
})
export class DrizzleModule {}
