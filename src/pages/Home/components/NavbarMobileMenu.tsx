import useNavbarStore from "@/store/NavbarStore";
import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const NavbarMobileMenu: React.FC = () => {
    const { pathname } = useLocation();
    
const {closeNavbar} = useNavbarStore()
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Capabilities",
      link: "/capabilities",
    },
    {
      name: "Career",
      link: "/careers",
    },
  ];

  return (
    <div>
      {menus.map((menu, index) => (
        <Link
          to={menu.link}
          key={index}
          onClick={()=>closeNavbar()}
          className={`flex items-center justify-between py-4 border-b border-gray-200 ps-4 ${pathname == menu.link? "text-red-500 bg-slate-50 font-semibold" : "text-black"}`}
        >
          <p>{menu.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavbarMobileMenu;
