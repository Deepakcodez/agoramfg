import Navbar from "@/pages/Home/components/Navbar"
import React from "react"
import { Outlet } from "react-router-dom"


const ClientLayout: React.FC = () => {

    return (
        <div className="  min-h-auto       bg-white">
            <Navbar />
            <Outlet />

        </div>


    )
}
export default ClientLayout