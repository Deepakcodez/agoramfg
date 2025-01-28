import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

interface PageHeroSectionProps {
  title: string;
}

const PageHeroSection: React.FC<PageHeroSectionProps> = ({ title }) => {
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
      className=" h-[12rem] md:h-[32rem] relative overflow-hidden"
    >
      <h1 className="text-white md:text-[5vw] text-2xl z-10 font-bold motion-preset-focus absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-jakarta">
        {title}
      </h1>

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