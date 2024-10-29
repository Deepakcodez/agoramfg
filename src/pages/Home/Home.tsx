import React from "react"
import { Footer, LandingPage, Testinomial } from "./components"

export const Home: React.FC = () => {
  return (
    <div className="w-full h-screen text-black">
      <LandingPage />
      <Testinomial />
      <Footer />
    </div>
  )
}
