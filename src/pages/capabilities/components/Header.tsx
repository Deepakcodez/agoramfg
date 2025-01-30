import React from "react";
import {  useLocation } from "react-router-dom";

interface HeaderProps {
  setCapability: React.Dispatch<React.SetStateAction<string>>;
}
const Header: React.FC<HeaderProps> = ({setCapability}) => {
  const location = useLocation();
  const HeaderMenu = [
    { name: "Assembly", link: "/capabilities/assembly" },
    { name: "Design", link: "/capabilities/design" },
    { name: "Form", link: "/capabilities/form" },
    { name: "Laser", link: "/capabilities/laser" },
    { name: "Paint", link: "/capabilities/paint" },
    { name: "Ship", link: "/capabilities/ship" },
    { name: "Weld", link: "/capabilities/weld" },
  ];

  return (
    <div className="md:pt-[5rem] pt-4 pb-5 px-4 w-fit flex overflow-x-auto md:space-x-4 space-x-2 items-center">
      {HeaderMenu.map((item, index) => (
        <button
          key={`HEADER_KEYS_${index}`}
          onClick={()=>setCapability(item.name)}
          className={` group flex justify-center items-center h-full backdrop-blur-md border hover:bg-gray-50 border-gray-300 rounded-full px-2 md:px-6 py-1 md:py-2  transition-all duration-300 transform ${
            location.pathname.includes(item.link)
              ? " shadow-md scale-105"
              : "scale-100"
          }`}
        >
          <p
            className="text-xs md:text-sm font-medium text-white group-hover:text-black"
          >
            {item.name}
          </p>
        </button>
      ))}
    </div>
  );
};

export default Header;
