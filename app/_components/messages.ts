import client from '@/lib/db';
import { Row } from '@libsql/client';

export interface Message {
  id: number;
  text: string;
  date: string;
}

export async function getMessages(): Promise<Message[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/messages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch messages');
  }
  return response.json();
} 