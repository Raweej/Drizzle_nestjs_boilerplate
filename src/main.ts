import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseConfig } from './constants/environment/config';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  const configService = app.get(ConfigService);
  const databaseConfig = configService.get<DatabaseConfig>('database.url');

  await app.listen(port, () => {
    console.log(`app listen port ${port}`);
    console.log(`${databaseConfig}`);
  });
}
bootstrap();
