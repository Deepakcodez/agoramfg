import React from "react"
import { About, Footer, LandingPage, Testinomial } from "./components"
import AnalyticSection from "./components/AnalyticSection"
import { OurProducts } from "./components/ourproducts"


export const Home: React.FC = () => {
  return (
    <div className="w-full h-screen text-black">
      <LandingPage />
      <AnalyticSection />
      <OurProducts />
      <About />
      <Testinomial />
      <Footer />

    </div>
  )
}
