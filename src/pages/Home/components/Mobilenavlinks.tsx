import { navlinks } from "@/data";
import { NavlinksTypes } from "@/types";
import { cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion"
import React from "react";
import { Link } from "react-router-dom"


interface MobilenavlinksProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Mobilenavlinks: React.FC<MobilenavlinksProps> = ({ menuOpen, setMenuOpen }) => {
    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.ul
                    className=" top-full left-0  absolute z-[49] flex flex-col gap-4 md:hidden bg-white shadow-lg p-8 w-full"
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    {navlinks.map((navlink: NavlinksTypes, index: number) => (
                        <li key={`NAVLINKS_MOBILE_${index}`}>
                            <Link
                                to={navlink.link}
                                className={cn("block text-lg font-medium", {
                                    "border-b-2 border-A-red": location.pathname === navlink.link,
                                })}
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                {navlink.title}
                            </Link>
                        </li>
                    ))}
                </motion.ul>
            )}
        </AnimatePresence>
    )
}
export default Mobilenavlinks