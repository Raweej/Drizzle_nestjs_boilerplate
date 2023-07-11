import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PG_CONNECTION } from '@/constants/connectPG';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { users, User } from '@/drizzle/schema';
@Injectable()
export class UsersService {
  constructor(@Inject(PG_CONNECTION) private db: NodePgDatabase) {}
  async create(createUserDto: CreateUserDto) {
    return await this.db
      .insert(users)
      .values({ email: 'test@gmail.com' })
      .returning();
  }

  findAll() {
    return `This action returns all users`;
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
