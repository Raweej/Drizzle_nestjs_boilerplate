import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { DrizzleModule } from './modules/drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '@/constants/environment/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      expandVariables: true,
      envFilePath: ['.env'],
      load: [configuration],
    }),
    UsersModule,
    DrizzleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
