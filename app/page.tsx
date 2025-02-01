import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { getMessages } from "./messages"

export default async function Home() {
  const messages = await getMessages();
  
  return (
    <div className="min-h-screen bg-green-200">
      <nav className="flex items-center justify-between p-4 bg-green-300">
        <h1 className="text-xl font-semibold">positive.help</h1>
        <Button className="bg-white text-green-800 hover:bg-green-50">
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Positivity
        </Button>
      </nav>
      <main className="container mx-auto p-6 space-y-4">
        <h2 className="text-3xl font-bold mb-6">Just Positive Vibes</h2>
        <div className="space-y-3">
          {messages.map((message) => (
            <div key={message.id} className="text-gray-800">
              <p>{message.text}</p>
              <span className="text-sm text-gray-600">({message.date})</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

