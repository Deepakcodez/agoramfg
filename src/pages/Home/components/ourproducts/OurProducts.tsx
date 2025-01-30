import logo from "@/assets/images/logo.png";
import agoraBuilding from "@/assets/images/agora.png";
import {
  controlconsoleExtra1,
  multidoorExtra1,
  rackExtra1,
  singleDoorExtra1,
  smallExtra1,
  transformerExtra1,
} from "@/constants/imagePath";

import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const OurProducts: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-700/90 mb-6 text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-12 md:grid-rows-12 gap-4 mb-24 lg:mx-24 mx-4 h-auto md:h-screen 2xl:h-[45rem]">
        {/* Image 1 */}
        <div className="md:col-span-3 md:row-span-4 rounded-xl bg-slate-400 overflow-hidden motion-preset-expand relative group">
         <div className="absolute flex ps-3 pb-5 items-end inset-0  group-hover:opacity-30 opacity-0  bg-black duration-700">
           <h1 className="text-2xl font-semibold text-white ">Single Door</h1>
         </div>
          <img
            src={singleDoorExtra1}
            alt="1"
            className="h-full w-full object-cover  transition duration-300 ease-in-out"
          />
        </div>

        {/* Image 2 */}
        <div className="md:col-span-5 md:row-span-3 rounded-xl bg-[#d8d8d8] overflow-hidden motion-preset-expand relative group">
        <div className="absolute flex ps-3 pb-5 items-end inset-0 group-hover:opacity-30 opacity-0 bg-black duration-700">
           <h1 className="text-2xl font-semibold text-white">Racks</h1>
         </div>
          <img
            src={rackExtra1}
            alt="Image2"
            className="h-full w-full object-contain  hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>

        {/* Image 3 */}
        <div className="md:col-span-4 md:row-span-6 rounded-xl bg-[#d8d8d8] overflow-hidden motion-preset-expand relative group">
        <div className="absolute flex ps-3 pb-5 items-end inset-0 group-hover:opacity-30 opacity-0 bg-black duration-700">
           <h1 className="text-2xl font-semibold text-white">Multi Door</h1>
         </div>
          <img
            src={multidoorExtra1}
            alt="Image3"
            className="h-full w-full object-cover  hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>

        {/* Image 4 with Gradient Overlay */}
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${agoraBuilding})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="md:col-span-5 md:row-span-4 rounded-xl bg-[#d8d8d8] overflow-hidden motion-preset-expand flex items-center justify-center"
        >
          <img src={logo} alt="logo" />
        </div>

        {/* Image 5 */}
        <div className="md:col-span-3 md:row-span-3 rounded-xl bg-[#d8d8d8] overflow-hidden motion-preset-expand relative group">
        <div className="absolute flex ps-3 pb-5 items-end inset-0 group-hover:opacity-30 opacity-0 bg-black duration-700">
           <h1 className="text-2xl font-semibold text-white">Transformer</h1>
         </div>
          <img
            src={transformerExtra1}
            alt="Image5"
            className="h-full w-full object-cover  hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>

        {/* Image 6 */}
        <div className="relative md:col-span-4 md:row-span-6 rounded-xl bg-[#d8d8d8] overflow-hidden motion-preset-expand group">
          <Link to={"/products"}>
            <div className="absolute flex justify-center items-center inset-0 bg-black/30">
              <h1 className="text-white font-semibold md:text-3xl sm:text-xl text-sm">
                Explore More
              </h1>
              <MdArrowOutward className=" md:text-5xl text-2xl text-A-red group-hover:scale-125 duration-700" />
            </div>
            <img
              src="https://www.nilkamalfurniture.com/cdn/shop/products/MagnaLargeGlassDoorAlmirah-LS.jpg?v=1669112344"
              alt="Image6"
              className="h-full w-full object-cover  hover:scale-110 transition duration-300 ease-in-out"
            />
          </Link>
        </div>

        {/* Image 7 */}
        <div className="md:col-span-5 md:row-span-5 rounded-xl bg-[#d8d8d8] overflow-hidden motion-preset-expand relative group">
        <div className="absolute flex ps-3 pb-5 items-end inset-0 group-hover:opacity-30 opacity-0 bg-black duration-700">
           <h1 className="text-2xl font-semibold text-white">Control Console</h1>
         </div>
          <img
            src={controlconsoleExtra1}
            alt="Image7"
            className="h-full w-full object-cover  hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>

        {/* Image 8 */}
        <div className="md:col-span-3 md:row-span-5 rounded-xl bg-[#d8d8d8] overflow-hidden motion-preset-expand relative group">
        <div className="absolute flex ps-3 pb-5 items-end inset-0 group-hover:opacity-30 opacity-0 bg-black duration-700">
           <h1 className="text-2xl font-semibold text-white">Small Boxes</h1>
         </div>
          <img
            src={smallExtra1}
            alt="Image8"
            className="h-full w-full object-cover  hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
