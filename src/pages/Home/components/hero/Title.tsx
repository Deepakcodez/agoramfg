import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const Title: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 items-center md:items-start">
            <h1 className="md:text-5xl md:text-[3vw]  text-4xl font-bold text-blue-950 text-center md:text-left  ">
                You'll find  we are a <span className="text-red-500 motion-preset-typewriter">Perfect </span>  fit
            </h1>

            <p className="md:text-sm text-gray-600 w-full text-wrap lg:pe-24 md:text-left text-center">
                Agora Manufacturing has been a leading steel fabricator and manufacturer of quality electrical enclosures since 1982. We are proud to serve numerous industries including electrical and electronic, nuclear, marine, entertainment, and more.
            </p>

            <button className="bg-blue-600  flex items-center justify-center gap-2  lg:mx-0 text-white px-12 w-[13rem] rounded-lg py-4 hover:-translate-y-2 duration-500 hover:shadow-lg shadow-blue-400">
                <h1>Explore</h1>
                <HiOutlineArrowRight />
            </button>
        </div>
    );
};

export default Title;
