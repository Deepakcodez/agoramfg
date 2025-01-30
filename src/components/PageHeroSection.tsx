import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

interface PageHeroSectionProps {
  title: string;
  children?: React.ReactNode; // Add children prop to accept Header
}

const PageHeroSection: React.FC<PageHeroSectionProps> = ({ title, children }) => {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      modules={[Pagination, Autoplay]} // Add Autoplay module
      className="h-[12rem] md:h-[22rem] relative overflow-hidden"
    >
      {/* Title positioning */}
      <h1 className="text-white md:text-[5vw] xl:text-[5rem] text-2xl z-10 font-bold motion-preset-focus absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-jakarta">
        {title}
      </h1>

      {/* Center the Header below the title */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-12 z-20  w-full flex justify-center">
        {children} {/* Render Header passed from Capabilitylayout */}
      </div>

      {/* Swiper slides */}
      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <img
          src="https://metaltech.us/wp-content/uploads/2021/10/GettyImages-491842959-1024x664.jpg"
          alt="image"
          className="h-full w-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <img
          src="https://www.bassettmechanical.com/wp-content/uploads/2023/08/Welding-Pressure-Vessel-Manufacturing-Facility-1024x623.jpg"
          alt="image"
          className="h-full w-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <img
          src="https://kellogg.edu/wp-content/uploads/2022/03/Welding-Lab.jpg"
          alt="image"
          className="h-full w-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <img
          src="https://skillpointe.com/sites/default/files/styles/max_1300x1300/public/2020-08/Welder.jpg.webp?itok=5aI7iah5"
          alt="image"
          className="h-full w-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default PageHeroSection;
