import CapibilityDesign from "@/components/CapibilityDesign";
import { designImage } from "@/constants/imagePath";


const Design = () => {
  const content = [
    "Manufacturing custom enclosures and various products requires significant design to ensure a quality end product. At Agora Manufacturing we have a strong team of engineers with decades of experience. Our engineers will explore all alternatives, and suggest solutions specifically tailored to meet your custom needs, while reducing costs and streamlining the manufacturing process.",
    "Whether you have a basic sketch, an idea, or a CAD drawing, our engineers will work directly with you to bring your project to life. With close attention to strength, quality, versatility and appearance, our engineers generate a two or three-dimensional representation of the product, while offering suggestions to better the design. The final drawing is then approved before proceeding to production.",
    "Proto-types are common in the industry, as there is often uncertainty as to whether a new design will do what is desired. We have the knowledge and experience to custom design what you need, no conceptual stage is too early, no project is too big or too small, contact us today!"
    
  ];

  return (
    <CapibilityDesign
      title="Design"
      content={content}
      imageSrc={designImage}
      imageAlt="Design Process"
    />
  );
};

export default Design;
