import { NextResponse } from 'next/server';
import client from '@/lib/db';
import { Row } from '@libsql/client';

export interface Message {
  id: number;
  text: string;
  date: string;
  url: string;
}

export async function GET() {
  try {
    const result = await client.execute('SELECT id, msg as text, slug as url, date FROM messages');
    const messages = result.rows.map((row: Row) => ({
      id: row.id as number,
      text: row.text as string,
      date: row.date as string,
      url: row.url as string
    }));
    
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
} 