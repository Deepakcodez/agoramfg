import { PaddingWrapper } from "@/components";
import { menWorking } from "@/constants/imagePath";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <PaddingWrapper>
      <div className="bg-gray-100 rounded-lg flex flex-col  ">
        <div className="flex px-7 pt-6">
          {[...Array(3)].map((_, index) => (
            <div
              className="h-4 aspect-square rounded-full bg-red-200 mx-1"
              key={index}
            />
          ))}
        </div>
        <div className="flex md:flex-row flex-col mx-auto   h-auto ">
          {/* Text Section */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h2 className="font-semibold md:text-3xl text-xl text-gray-800">
              You're in good hands
            </h2>

            {/* Initially Visible Text */}
            <p className="mt-4 text-gray-600 leading-relaxed md:text-base text-xs">
              Agora Manufacturing has been a trusted steel fabricator and
              producer of high-quality electrical enclosures since 1982. Serving
              a wide range of industries, including electrical and electronic,
              nuclear, marine, and entertainment, Agora’s expertise extends to
              creating custom solutions for diverse applications. Their
              extensive portfolio showcases projects such as control cabinets,
              large transformer housings, racks, consoles, multi-door
              enclosures, and switch gears, reflecting their capability to
              handle projects of any scale with precision.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed md:text-base text-xs">
              Dedicated to meeting all material requirements, Agora works with
              an array of metals, including carbon steel, galvanized steel,
              stainless steel, and aluminum. This material versatility allows
              them to tailor solutions to specific needs, ensuring that every
              product meets both the functional and aesthetic standards of each
              industry they serve.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed md:text-base text-xs">
              At Agora, customers are the highest priority. The company prides
              itself on its highly skilled technical team, renowned for
              delivering precision and exceptional service. With a commitment to
              the highest quality standards, Agora offers flexibility,
              reliability, and a customer-centered approach that drives their
              passion for excellence. They find joy in their work, aiming to
              produce outstanding quality with every project they undertake.
            </p>

            <Link to={"/about-us"}>
              <button className="bg-A-blue hover:bg-A-blue/90 mt-6 px-6 py-2 rounded text-white transition duration-300 flex items-center gap-2 ">
                Learn more <MdArrowOutward/>
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 h-full  pe-6">
            <img
              src={menWorking}
              alt="Image"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </PaddingWrapper>
  );
};

export default About;
