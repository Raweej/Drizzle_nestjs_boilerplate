import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { users, User } from '@/drizzle/schema';
import { DRIZZLE_ORM } from '@/config/drizzle.config';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UsersService {
  constructor(
    @Inject(DRIZZLE_ORM) private drizzle: NodePgDatabase,
    private configService: ConfigService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.drizzle
      .insert(users)
      .values({ email: 'test@gmail.com' })
      .returning();
  }

  findAll() {
    const url = this.configService.get('database.url');
    return test;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
