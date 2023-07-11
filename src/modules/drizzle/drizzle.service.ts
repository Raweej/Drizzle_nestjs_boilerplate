import { DatabaseConfig } from '@/constants/environment/config';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

export class DrizzService {
  constructor(private configService: ConfigService) {}
  clientConnect() {
    const connectionString =
      this.configService.get<DatabaseConfig>('database.url');
    const client = new Pool({
      connectionString: connectionString.toString(),
    });
    return client;
  }
}
