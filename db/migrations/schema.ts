import { sqliteTable, AnySQLiteColumn, integer, text, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const messages = sqliteTable("messages", {
	id: integer().primaryKey(),
	msg: text(),
	uuid: text(),
	slug: text(),
	date: numeric(),
});

