import React from "react";

import PageHeroSection from "@/components/PageHeroSection";
import { Footer } from "../Home/components";
import Header from "./components/Header";
import Assembly from "./components/Assembly";

const Capabilitylayout: React.FC = () => {
  return (
    <div>
      <div className="relative">
        {/* Pass Header inside PageHeroSection */}
        <PageHeroSection title={"CAPABILITIES"}>
          <Header />
        </PageHeroSection>
      </div>

      <div className="relative bg-white md:mx-12 mx-2">
        {/* Apply the parallax effect to the container */}
        <Assembly />
      </div>
      <Footer />
    </div>
  );
};

export default Capabilitylayout;
