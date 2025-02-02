import { sqliteTable, integer, text, numeric } from "drizzle-orm/sqlite-core"

export const messages = sqliteTable("messages", {
	id: integer().primaryKey(),
	msg: text('msg'),
	hash: text('hash'),
	slug: text('slug'),
	date: numeric('date'),
});
