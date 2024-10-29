import React from "react"
import {Footer, LandingPage, Testinomial } from "./components"
import About from "./components/about"

export const Home: React.FC = () => {
  return (
    <div className="w-full h-screen text-black">
      <LandingPage />
      <About />
      <Testinomial />
      <Footer />

    </div>
  )
}
