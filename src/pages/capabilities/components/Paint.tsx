import CapibilityDesign from "@/components/CapibilityDesign";
import { laserImage } from "@/constants/imagePath";

const Paint = () => {

  const content = [
    "At Agora Manufacturing, we prioritize quality by using only the highest-grade, outdoor-rated paints sourced from UL-certified suppliers. This ensures that our products deliver long-lasting durability and exceptional performance, even in the harshest conditions. Whether you're looking for protection against the elements or a high-quality finish, we have you covered.",
    
    "Our extensive inventory features a wide selection of industry-standard colors, and we are also capable of matching any custom paint color to meet the unique needs of your project. No matter how specific your color requirements are, Agora Manufacturing can provide the exact shade you need for a flawless result.",
    
    "In addition to color customization, we offer a variety of finishes to match your aesthetic and functional requirements. ",
    "Choose from flat, satin, gloss, high-gloss, metallic, and hammer tone finishes, all designed to provide the perfect look for your product. Our texture options range from smooth to rough, offering solutions that not only enhance appearance but also conceal surface imperfections for a cleaner finish.",
    
    "Whether you're working on a small project or a large-scale production, Agora Manufacturing is equipped to deliver the ideal paint finish. We are committed to ensuring that your project has the perfect look and durability, no matter the complexity or size of your painting needs."
  ];
  
  return (
    <CapibilityDesign
      title="Paint"
      content={content}
      imageSrc={laserImage}
      imageAlt="paint Process"
    />
  );
}

export default Paint;
