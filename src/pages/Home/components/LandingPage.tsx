import { landingImage } from "@/constants/imagePath"
import React from "react"

const LandingPage: React.FC = () => {
    return (
        <div className="w-full h-screen">
            <div style={{
                backgroundImage: `url(${landingImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
                className="h-full w-full">
                
                <div className="w-7/12 flex flex-col justify-center h-full md:px-24 px-12">
                    <div className="text-white text-[8vw] leading-[7rem] font-semibold ">
                        <h1>YOU'LL FIND</h1>
                        <h1>WE'RE A</h1>
                        <h1>PERFECT FIT</h1>
                        <p className="text-sm font-normal">Solution to your custom electrical cabinets & enclosures needs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage