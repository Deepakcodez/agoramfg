import { logo } from "@/constants/imagePath";
import { cn } from "@/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navlinks = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "About Us",
      link: "/about"
    },
    {
      title: "Products",
      link: "/products"
    },
    {
      title: "Capabilities",
      link: "/capabilities"
    },
    {
      title: "Careers",
      link: "/careers"
    }
  ];

  return (

    <div className="md:px-24 px-12 fixed w-full flex items-center justify-between backdrop-blur-[3px]">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Agora" />
      </Link>

      {/* Navlinks */}
      <ul className="flex gap-8">
        {navlinks.map((navlink, index) => (
          <li key={`NAVLINKS_${index}`}>
            <Link
              to={navlink.link}
              className={cn("text-white", {
                "border-b-2 border-A-red": location.pathname.includes(navlink.link)
              })}
            >
              {navlink.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <Link to="/contact">
        <button className="bg-A-red text-white px-8 py-1 rounded-md font-semibold border border-red-400">
          Contact
        </button>
      </Link>
    </div>

  );
};

export default Navbar;
