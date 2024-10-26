import React from "react"


interface PaddingWrapperProps {
    children: React.ReactNode
}
const PaddingWrapper: React.FC<PaddingWrapperProps> = ({ children }) => {
    return (
        <div className="">
            {children}
        </div>
    )
}
export default PaddingWrapper