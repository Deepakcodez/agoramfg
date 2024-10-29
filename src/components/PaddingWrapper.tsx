import { cn } from "@/utils"
import React from "react"


interface PaddingWrapperProps {
    children: React.ReactNode;
    className? : string;
}
const PaddingWrapper: React.FC<PaddingWrapperProps> = ({ children , className}) => {
    return (
        <div className={cn("px-4 md:px-24",className)}>
            {children}
        </div>
    )
}
export default PaddingWrapper