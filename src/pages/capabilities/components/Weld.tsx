import CapibilityDesign from "@/components/CapibilityDesign";

import { weldImage } from "@/constants/imagePath";

const Weld = () => {
  const content = [
    "At Agora Manufacturing, we are proud to have a driven team of highly qualified, CWB-certified welders who bring both skill and experience to every project. Our team is dedicated to delivering top-tier welding solutions, regardless of project size or complexity.",
  
    "Our welders have extensive experience working with a variety of materials, including mild steel, stainless steel, structural steel, and aluminum. This versatile skill set ensures that we can meet the needs of diverse industries and applications, from lightweight components to heavy-duty structures.",
  
    "We utilize the latest welding technology combined with precise techniques to guarantee the highest quality welds. Our custom-engineered fixtures further enhance the precision and consistency of every weld, allowing us to deliver reliable results time after time. Whether it's a simple weld or a complex multi-pass joint, our team is equipped to handle any challenge.",
  
    "From complex housings and large enclosures to structural frames, bases, and small wall-mount boxes, our welders are capable of providing a wide range of welding solutions tailored to meet your specific needs. We take the time to fully understand your requirements and ensure that the final result meets your highest standards.",
  
    "At Agora Manufacturing, we believe that quality welding is key to the longevity and functionality of any product. With our highly skilled team and state-of-the-art technology, you can trust us to deliver exceptional welds that stand the test of time."
  ];
  
   
  return (
    <CapibilityDesign
      title="Weld"
      content={content}
      imageSrc={weldImage}
      imageAlt="weld Process"
    />
  );
}

export default Weld;
