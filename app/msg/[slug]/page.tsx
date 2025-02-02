import type { Message } from "@/app/api/messages/[slug]/route";
import Link from "next/link";

export default async function MessagePage({ params }: { params: { slug: string } }) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/messages/${params.slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const message = await response.json() as Message;

    return (
      <div className="min-h-screen bg-green-200">
        <nav className="flex items-center justify-between p-4 bg-green-300">
          <Link href="/" className="text-xl font-semibold hover:text-green-800">
            positive.help
          </Link>
        </nav>
        <main className="container mx-auto p-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-xl mb-4">{message.text}</p>
            <span className="text-sm text-gray-600">({message.date})</span>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-green-200">
        <nav className="flex items-center justify-between p-4 bg-green-300">
          <Link href="/" className="text-xl font-semibold hover:text-green-800">
            positive.help
          </Link>
        </nav>
        <main className="container mx-auto p-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-red-600">Failed to load message. Please try again later.</p>
          </div>
        </main>
      </div>
    );
  }
}