"use client"
import { SeriesList } from "@/components/SeriesList"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  return (
    <div>
      <div className="flex flex-row justify-center">
        Series List
      </div>

      <div className="flex flex-row justify-center">

        <SeriesList />
      </div>
    </div>
  )
}