import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "@/constants/imagePath";
import { navlinks } from "@/data";
import { NavlinksTypes } from "@/types/navlinks.types";
import { cn } from "@/utils";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; 
const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (


    <div className="z-50 fixed flex justify-between items-center bg-white backdrop-blur-[3px] px-12 md:px-24 py-2 w-full">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Agora" className="h-12" />
      </Link>

      {/* Desktop Navlinks */}
      <ul className="md:flex gap-8 hidden">
        {navlinks.map((navlink: NavlinksTypes, index: number) => (
          <li key={`NAVLINKS_${index}`}>
            <Link
              to={navlink.link}
              className={cn(" ", {
                "border-b-2 border-A-red": location.pathname === navlink.link
              })}
            >
              {navlink.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <Link to="/contact" className="md:block hidden">
        <button className="bg-A-red px-8 py-1 border border-red-400 rounded-md font-semibold text-white">
          Contact
        </button>
      </Link>

      {/* Menu Button */}
      <button
        className="md:hidden text-2xl text-A-red"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Navlinks (Wraps the menu to manage entrance and exit animations dynamically, only rendering when menuOpen is true.) */}
      <AnimatePresence> 
        {menuOpen && (
          <motion.ul
            className="top-full left-0 absolute flex flex-col gap-4 md:hidden bg-white shadow-lg p-8 w-full"
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
                  onClick={toggleMenu} 
                >
                  {navlink.title}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
