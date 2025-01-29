import React from "react";
import Title from "./hero/Title";
import Tag from "./hero/Tag";
import HeroRightSection from "./hero/RightSection";

const LandingPage: React.FC = () => {
    return (
        <div className=" 3xl:h-[55rem] h-screen  grid grid-cols-12 relative  bg-red-5 pt-24 md:py-0">
        {/* Left Section */}
        <div className="md:col-span-6 col-span-12 flex flex-col gap-6 items-center md:items-start justify-center  px-4 sm:px-8 lg:px-16 xl:px-24 ">
          
          <Tag />
          <Title />
        </div>
  
        {/* Right Section */}
        <div className="md:col-span-6 col-span-12 mt-12 block overflow-hidden  ">
          <div className="flex items-center justify-center    h-full w-full">
            <HeroRightSection />
          </div>
        </div>
      </div>
    );
};

export default LandingPage;
