import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "@/constants/imagePath";
import { navlinks } from "@/data";
import { NavlinksTypes } from "@/types/navlinks.types";
import { cn } from "@/utils";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar: React.FC = () => {
  const location = useLocation();
  const [IsOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!IsOpen);

  return (
    <div className="z-50 fixed flex justify-between items-center bg-white backdrop-blur-[3px] px-8 md:px-24 w-full">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Agora" className="h-16" />
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

      {/*  Menu Button */}
      <button
        className="md:hidden text-2xl text-A-red"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {IsOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Navlinks  */}
      {IsOpen && (
        <ul className="top-full left-0 absolute flex flex-col gap-4 md:hidden bg-white shadow-lg p-8 w-full">
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

          {/* Mobile Contact Button */}
          <Link to="/contact" onClick={toggleMenu}>
            <button className="bg-A-red mt-4 px-8 py-2 rounded-md w-full font-semibold text-white">
              Contact
            </button>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
