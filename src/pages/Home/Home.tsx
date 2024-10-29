import React from "react"
import { About, Footer, LandingPage, Testinomial } from "./components"


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
