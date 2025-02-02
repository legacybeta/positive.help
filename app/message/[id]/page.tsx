import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a database
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

export default function MessagePage({ params }: { params: { id: string } }) {
  const message = messages.find((m) => m.id === Number.parseInt(params.id))

  if (!message) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-green-200">
      <nav className="flex items-center justify-between p-4 bg-green-300">
        <Link href="/" className="text-xl font-semibold hover:text-gray-700 transition-colors">
          positive.help
        </Link>
        <Button className="bg-white text-green-800 hover:bg-green-50">
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Positivity
        </Button>
      </nav>
      <main className="relative min-h-[calc(100vh-4rem)] p-6 flex items-center justify-center">
        <div className="max-w-[90%]">
          <h1 className="text-[5vw] leading-tight font-medium text-center">{message.text}</h1>
        </div>
        <span className="absolute bottom-6 left-6 text-sm text-gray-600">{message.date}</span>
      </main>
    </div>
  )
}

