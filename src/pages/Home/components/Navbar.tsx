import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "@/constants/imagePath";
import { navlinks } from "@/data";
import { NavlinksTypes } from "@/types/navlinks.types";
import { cn } from "@/utils";
import { FiMenu, FiX } from "react-icons/fi";
// import Mobilenavlinks from "./Mobilenavlinks";
import useNavbarStore from "@/store/NavbarStore";
const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, ] = useState(false);
  const { openNavbar } = useNavbarStore();

  return (


    <div className="z-50 fixed flex justify-between items-center bg-white backdrop-blur-[3px] px-4 md:px-24 py-2 w-full">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Agora" className="h-12" />
      </Link>

      {/* Desktop Navlinks */}
      <ul className="md:flex lg:gap-8 gap-3 hidden">
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

      <div className="flex gap-3  ">

        {/* Contact Button */}
        <Link to="/contact" className="">
          <button className="bg-A-red shadow-lg shadow-A-red/50 px-4 py-1 border border-red-400 rounded-md font-semibold text-white text-sm">
            Contact
          </button>
        </Link>

        {/* Menu Button */}
        <button
          className="md:hidden text-2xl "
          onClick={openNavbar}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Navlinks (Wraps the menu to manage entrance and exit animations dynamically, only rendering when menuOpen is true.) */}

        {/* <Mobilenavlinks  /> */}
      </div>

    </div>
  );
};

export default Navbar;
