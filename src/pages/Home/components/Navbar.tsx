import { logo } from "@/constants/imagePath";
import { navlinks } from "@/data";
import { NavlinksTypes } from "@/types";
import { cn } from "@/utils";
import React from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar: React.FC = () => {
  const location = useLocation();


  return (

    <div className="fixed z-50 flex justify-between items-center backdrop-blur-[3px] px-12 md:px-24 w-full bg-white">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Agora" className="h-16" />
      </Link>

      {/* Navlinks */}
      <ul className="flex gap-8">
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
      <Link to="/contact">
        <button className="bg-A-red px-8 py-1 border border-red-400 rounded-md font-semibold text-white">
          Contact
        </button>
      </Link>
    </div>

  );
};

export default Navbar;
