import React from "react";
import { RxCross2 } from "react-icons/rx";
// import { Link } from "react-router-dom";
import NavbarMobileMenu from "./NavbarMobileMenu";
import useNavbarStore from "@/store/NavbarStore";
import { logo } from "@/constants/imagePath";

const NavbarMobile: React.FC = () => {
  const { closeNavbar } = useNavbarStore();

  return (
    <div className="fixed inset-0 bg-black/50 z-[99999999] block md:hidden">
      <div className="relative  bg-white  h-full w-[15rem] motion-translate-x-in-[-99%] motion-translate-y-in-[0%] motion-duration-[1.00s]/translate border-r-OMblue border-r-2">
        {/* cancel button */}
        <div
          onClick={closeNavbar}
          className="absolute top-12 -right-5  h-10 w-10 bg-OMblue rounded-full  flex justify-center items-center border bg-white"
        >
          <RxCross2 color="blue" size={20} />
        </div>
        {/* cancel button */}

        {/* logo start */}
        <div className="bg-OMlightBlue py-8 flex justify-center">
          {/* <Link to={'/'}> */}
          <img src={logo} alt="Logo" className="h-12 " />
          {/* </Link> */}
        </div>
        {/* logo end */}

        {/* menu start */}
        <NavbarMobileMenu />
        {/* menu end */}
      </div>
    </div>
  );
};

export default NavbarMobile;