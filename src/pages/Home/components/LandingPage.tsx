import { landingImage } from "@/constants/imagePath"
import React from "react"

const LandingPage: React.FC = () => {
    return (
        <div className="w-full h-screen ">
            <div style={{
                backgroundImage: `url(${landingImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
                className="h-full w-full"></div>
        </div>
    )
}
export default LandingPage