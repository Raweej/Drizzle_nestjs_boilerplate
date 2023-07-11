import { integer, serial, text, pgTable, varchar } from 'drizzle-orm/pg-core';
import { InferModel, relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email'),
});

export type User = InferModel<typeof users>;
