import CapibilityDesign from "@/components/CapibilityDesign";

import { formImage } from "@/constants/imagePath";


const Form = () => {
  const content = [
    "At Agora Manufacturing, we pride ourselves on providing exceptional metal fabrication services, tailored to meet the diverse needs of our clients. With decades of experience, our team consists of highly skilled, certified metal fitters who are experts in transforming raw materials into precision-crafted metal components. Equipped with state-of-the-art 6-axis CNC brake presses, we bring unparalleled accuracy and efficiency to every project.",
  
    "We understand that every project is unique, which is why we approach each one with a customized strategy. Our facilities are designed to accommodate parts of various sizes and complexities. ",
   "With the ability to handle projects up to 12 feet in length, we are capable of producing large-scale components that meet the most demanding specifications. Additionally, our advanced machinery allows us to bend steel up to 3/8” thick, delivering consistent, high-quality results every time.",
    "Our 200-tonne bending force ensures that we can tackle even the most challenging metal forming tasks. From intricate designs to large, heavy-duty components, we can handle a wide range of projects with ease. Whether it’s a complex design requiring tight tolerances or a simple yet heavy-duty component, Agora Manufacturing has the expertise and resources to execute it with precision."
  ];
  

  return (
    <CapibilityDesign
      title="Form"
      content={content}
      imageSrc={formImage}
      imageAlt="form Process"
    />
  );
};

export default Form;
