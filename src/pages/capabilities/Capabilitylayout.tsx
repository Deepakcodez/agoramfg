import { Outlet } from "react-router-dom"
import { Capabilities } from "."
import Header from "./components/Header"
import { PaddingWrapper } from "@/components"
import { Footer } from "../Home/components"

const Capabilitylayout = () => {
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