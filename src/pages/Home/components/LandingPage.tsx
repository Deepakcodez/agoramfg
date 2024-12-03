import React from "react";
import { landingImage } from "@/constants/imagePath";

const LandingPage: React.FC = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Responsive Background Image */}
            <div
                style={{
                    backgroundImage: `url(${landingImage})`,
                }}
                className="h-full w-full bg-cover bg-center sm:bg-[top] md:bg-[center]"
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"/>

                {/* Text Section */}
                <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-6 sm:px-8 md:px-16 lg:px-24 text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center md:text-left">
                        YOU'LL FIND
                        <br />
                        WE'RE A
                        <br />
                        PERFECT FIT
                    </h1>
                    <p className="mt-4 text-center md:text-left text-xs sm:text-base md:text-lg max-w-md">
                        Solution to your custom electrical cabinets & enclosures needs
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
