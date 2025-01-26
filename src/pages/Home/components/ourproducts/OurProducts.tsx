import { control1, largehousing1, load1, misc1, multidoor1, racks1, singleDoor1, small1, transformer1 } from "@/constants/imagePath";
import React, { useRef } from "react";

import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

const OurProducts: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const imgesData = [
    {
      image: control1,
      title: "Automotive Industry",
    },
    {
      image: largehousing1,
      title: "Footwear Industry",
    },
    {
      image: load1,
      title: "Luggage Industry",
    },
    {
      image: misc1,
      title: "Stationary Industry",
    },
    {
      image: multidoor1,
      title: "Furnishing/ Decoration Industry",
    },
    {
      image: racks1,
      title: "Sports Goods Industry",
    },
    {
      image: singleDoor1,
      title: "Garment Industry",
    },
    {
      image: small1,
      title: "Upholstery Industry",
    },
    {
      image: transformer1,
      title: "Upholstery Industry",
    },
  ];

  return (
    <div className="w-full py-24 lg:px-24 px-4 relative">
      <h1 className="text-5xl font-semibold text-center mb-8">Our Products</h1>

      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute lg:block hidden left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 hover:bg-gray-700"
      >
        <GoTriangleLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute lg:block hidden right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 hover:bg-gray-700"
      >
        <GoTriangleRight />
      </button>

      {/* Scrollable Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-3 w-full overflow-x-scroll scrollbar-hide"
      >
        {imgesData.map((service, index) => (
          <div
            key={index}
            className="relative bg-gray-400 h-[8rem] md:h-[15rem] w-[15rem] md:w-[25rem] rounded-xl flex-shrink-0 overflow-hidden"
          >
            <img
              src={service.image}
              alt=" prod_image"
              className="w-full h-full object-cover scale-150"
            />

            <div className="bg-white absolute -top-2 left-2 md:left-8 p-2 rounded-xl md:text-lg text-sm px-4 shadow-lg">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
