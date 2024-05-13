import React from "react"
import Hero from "./_components/hero"
import TextBlock from "./_components/text-block"
import Wallets from "./_components/wallets"
import Roadmap from "./_components/roadmap/roadmap"
import Stats from "./_components/stats/stats"
import Tutorial from "./_components/tutorial/tutorial"
import Outro from "./_components/outro"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TextBlock />
      <Wallets />
      <Roadmap />
      <Tutorial />
      <Outro />
    </>
  )
}
