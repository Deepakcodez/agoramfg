import React from "react"
import {Footer, LandingPage, Testinomial } from "./components"

export const Home: React.FC = () => {
  return (
    <div className="text-black h-screen w-full">
      <LandingPage />
      <Testinomial />
      <Footer />

    </div>
  )
}
