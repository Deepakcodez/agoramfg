import React from "react";
const AboutContentSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-7 lg:ps-12 ">
      <h1 className="text-blue-950 font-bold lg:text-[2.4vw] 3xl:text-5xl text-3xl lg:leading-[3rem]">
        Agora MFG Inc.
        <br />
        Manufacturing Since 1982.
      </h1>

      <div className="text-gray-500 lg:text-lg text-sm ">
        <h1 className="mb-5">
          Agora Manufacturing has been a leading steel fabricator and
          manufacturer of quality electrical enclosures since 1982. We are proud
          to serve numerous industries including electrical and electronic,
          nuclear, marine, entertainment, and more. Our portfolio of past
          projects is vast. From control cabinets and large transformer
          housings, to racks, consoles, multi-door enclosures and switch gears,
          we have the skills and experience necessary to take on any project. We
          work with a complete range of materials to meet all of your needs, and
          this includes carbon steel, galvanized steel, stainless steel and
          aluminum. <br /> At Agora, our customers always come first. We have at
          our disposal the most experienced technical team who provide precision
          manufacturing and excellent service. We have the highest quality
          standards, and promise unlimited flexibility and long-term
          reliability. We are driven by professionalism, the desire for
          challenge, and the need to produce our best quality work for each and
          every customer. We genuinely enjoy what we do.
        </h1>
      </div>
    </div>
  );
};

export default AboutContentSection;
