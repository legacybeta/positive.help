import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function Home() {
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

const messages = [
  {
    id: 1,
    text: "It doesn't take forever to Change Your Forever",
    date: "July 15, 2020",
  },
  {
    id: 2,
    text: "Stay strong and persistent.",
    date: "June 29, 2020",
  },
  {
    id: 3,
    text: "I Was Blind, Now I Can See, You Make A Believer Out of Me, I'm Moving On Up!",
    date: "May 27, 2020",
  },
  {
    id: 4,
    text: "The Breath of Life Is Shared Between All Humans, Creatures, and Plants",
    date: "May 26, 2020",
  },
  {
    id: 5,
    text: "Keep Looking Up... That's The Secret of Life.",
    date: "April 29, 2020",
  },
]

