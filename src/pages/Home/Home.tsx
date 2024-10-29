import React from "react"
<<<<<<< HEAD
import {Footer, LandingPage, Testinomial } from "./components"
import About from "./components/about"
=======
import { About, Footer, LandingPage, Testinomial } from "./components"

>>>>>>> main

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
