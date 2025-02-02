import { sqliteTable, AnySQLiteColumn, integer, text, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const messages = sqliteTable("messages", {
	id: integer().primaryKey(),
	msg: text(),
	uuid: text(),
	slug: text(),
	date: numeric(),
});



export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').unique(),
  emailVerified: integer('emailVerified', { mode: 'timestamp_ms' }),
  image: text('image'),
});

export const accounts = sqliteTable('accounts', {
  userId: text('userId').notNull(),
  type: text('type').notNull(),
  provider: text('provider').notNull(),
  providerAccountId: text('providerAccountId').notNull(),
  refresh_token: text('refresh_token'),
  access_token: text('access_token'),
  expires_at: integer('expires_at'),
  token_type: text('token_type'),
  scope: text('scope'),
  id_token: text('id_token'),
  session_state: text('session_state'),
});
