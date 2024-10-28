import React from "react"


interface PaddingWrapperProps {
    children: React.ReactNode
}
const PaddingWrapper: React.FC<PaddingWrapperProps> = ({ children }) => {
    return (
        <div className="px-4 md:px-24">
            {children}
        </div>
    )
}
export default PaddingWrapper