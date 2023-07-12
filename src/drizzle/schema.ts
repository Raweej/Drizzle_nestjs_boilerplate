import {
  integer,
  serial,
  text,
  pgTable,
  varchar,
  json,
} from 'drizzle-orm/pg-core';
import { InferModel, relations, sql } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email'),
});

export const address = pgTable('table', {
  id: serial('id').primaryKey(),
  street: text('street'),
});

export type User = InferModel<typeof users, 'select'>;
export type NewUser = InferModel<typeof users, 'insert'>;
