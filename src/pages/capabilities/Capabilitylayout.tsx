import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import { PaddingWrapper } from "@/components"
import { Footer } from "../Home/components"
import React from "react"

const Capabilitylayout = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(pathname === '/capabilities/'){
            navigate('/capabilities/assembly')
        }
    },[pathname, navigate])

    return (
        <>
            <PaddingWrapper>
                <div className=" w-full min-h-screen h-auto">
                    <Header />
                    <Outlet />
                </div>
            </PaddingWrapper>
            <Footer />
        </>


    )
}
export default Capabilitylayout