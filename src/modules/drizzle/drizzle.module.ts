import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../../drizzle/schema';
import { DatabaseConfig } from '@/constants/environment/config';
import { PG_CONNECTION } from '@/constants/connectPG';

@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const connectionString =
          configService.get<DatabaseConfig>('database.url');
        const pool = new Pool({
          connectionString: connectionString.toString(),
        });

        return drizzle(pool, { schema });
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
