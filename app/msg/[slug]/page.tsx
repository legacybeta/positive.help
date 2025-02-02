import { GET } from "@/app/api/messages/[slug]/route";
import type { Message } from "@/app/api/messages/route";
import Link from "next/link";

export default async function MessagePage({ params }: { params: { slug: string } }) {
  const response = await GET(new Request(`/api/messages/${params.slug}`), { params });
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
} 