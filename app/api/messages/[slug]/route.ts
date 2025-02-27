import { NextResponse } from 'next/server';
import client from '@/lib/db';


// Export the Message interface
export interface Message {
  id: number;
  text: string;
  date: string;
  url: string;
}

export async function GET(request: Request) {
  try {
    const slug = request.url.split('/').pop();
    if (!slug) {
      return NextResponse.json({ error: 'Invalid slug' }, { status: 400 });
    }
    
    const result = await client.execute({
      sql: 'SELECT id, msg as text, slug as url, date FROM messages WHERE slug = ?',
      args: [slug]
    });
    
    if (!result.rows.length) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }

    const message = {
      id: result.rows[0].id as number,
      text: result.rows[0].text as string,
      date: result.rows[0].date as string,
      url: result.rows[0].url as string,
    };
    
    return NextResponse.json(message);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch message' }, { status: 500 });
  }
} 