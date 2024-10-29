import { FooterLogos } from "@/constants/imagePath"
import { navlinks } from "@/data";
import React from "react"
import { Link } from "react-router-dom";

const Footer: React.FC = () => {

    return (
        <div className= " bg-A-blue py-12 flex flex-col justify-center items-center  md:rounded-t-2xl rounded-t-md ">
            <div className="flex flex-wrap justify-center md:gap-8 gap-4  md:w-8/12 w-full mb-4 py-4 text-wrap">
                {
                    navlinks.map((links, i) =>
                        <Link key={`FOOTERLINKS_${i}`} to={links.link}>
                            <li className="list-none text-white md:text-base text-xs text-wrap">{links.title}</li>
                        </Link>
                    )
                }
            </div>
            <div className="h-[.6px] bg-gradient-to-r from-transparent    via-white to-transparent  w-8/12 mb-4 " />
            <img src={FooterLogos} alt="" />
            <h1 className=" text-xs text-white/90 self-start md:ps-24 ps-4 mt-4">
                Copyright 2014 Agora Manufactring
            </h1>
        </div>
    )
}
export default Footer