

import CapibilityDesign from '@/components/CapibilityDesign';
import { laserImage } from '@/constants/imagePath';
const Laser = () => {
const content = [
  "Laser cutting is one of the most efficient and precise methods for cutting metal, and at Agora Manufacturing, we leverage this technology to deliver high-quality results with every project. We are proud to operate two advanced Trumpf Laser machines, which allow us to produce parts with exceptional precision, a superior finish, and intricate details and markings. The remarkable speed of these lasers enhances productivity while reducing fabrication costs and lead times. This means we can meet your urgent requirements without compromising quality, all at competitive pricing.",
  
  "Whether you need a single, one-off part or a large-scale production run, the sophisticated technology behind our laser cutting machines ensures consistency across every cut. This guarantees that each piece is identical to your exact specifications, providing you with reliable, high-quality results every time.",
  
  "Materials We Cut and Their Specifications",
  
  "Our laser cutting machines are capable of cutting a wide range of materials, offering flexibility for various applications. Below are the materials we can cut, along with their respective thicknesses:",
  
  "Mild Steel: Up to 0.75\"",
  "Stainless Steel: Up to 0.625\"",
  
];
  return (
    <CapibilityDesign
      title="Laser"
      content={content}
      imageSrc={laserImage}
      imageAlt="form Process"
    />
  );
  
}

export default Laser;
