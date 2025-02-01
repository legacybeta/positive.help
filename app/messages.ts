import client from '@/lib/db';
import { Row } from '@libsql/client';

export interface Message {
  id: number;
  text: string;
  date: string;
}

export async function getMessages() {
  const result = await client.execute('SELECT id, msg, date, slug FROM messages');
  return result.rows.map((row: Row) => ({
    id: row.id as number,
    text: row.msg as string,
    date: row.date as string,
    slug: row.slug as string
  }));
} 