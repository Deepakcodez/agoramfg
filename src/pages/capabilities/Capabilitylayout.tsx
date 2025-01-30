import React from "react";

import PageHeroSection from "@/components/PageHeroSection";
import { Footer } from "../Home/components";
import Header from "./components/Header";
import { WideScreenhandler } from "@/components";
import CapabilityDistributer from "./components/CapabilityDistributer";

const Capabilitylayout: React.FC = () => {
  const [selectedCapability, setSelectedCapability] =
    React.useState<string>("assembly");
  return (
    <WideScreenhandler>
      <div className="relative">
        {/* Pass Header inside PageHeroSection */}
        <PageHeroSection title={"CAPABILITIES"}>
          <Header setCapability={setSelectedCapability} />
        </PageHeroSection>
      </div>
      <WideScreenhandler>
        <div className="relative bg-white md:mx-12 mx-2">
          {/* Apply the parallax effect to the container */}
          <CapabilityDistributer name={selectedCapability} />
        </div>
      </WideScreenhandler>
      <Footer />
    </WideScreenhandler>
  );
};

export default Capabilitylayout;
