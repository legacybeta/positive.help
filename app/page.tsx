import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { GET } from "./api/messages/route"
import type { Message } from "./api/messages/route"

export default async function Home() {
  const response = await GET();
  const messages = await response.json() as Message[];
  
  return (
    <div className="min-h-screen bg-green-200">
      <main className="container mx-auto p-6 space-y-4">
        <h2 className="text-3xl font-bold mb-6">Just Positive Vibes</h2>
        <div className="space-y-3">
          {messages.map((message: Message) => (
            <Link
              href={`/msg/${message.url}`}
              key={message.id}
              className="block text-gray-800 hover:text-gray-600 transition-colors"
            >
              <p>{message.text}</p>
              <span className="text-sm text-gray-600">({message.date})</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

