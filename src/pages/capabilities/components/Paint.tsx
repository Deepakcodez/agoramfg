import Capablitycontent from "./Capablitycontent"
import { assablyImage } from "@/constants/imagePath";

const Paint = () => {
  return (
    <Capablitycontent
      image={assablyImage}
      buttonText="Paint"
      cont1="At Agora Manufacturing, we use only the highest quality, outdoor-rated paints from UL-certified suppliers to ensure long-lasting durability and performance. Our extensive inventory includes a wide range of industry-standard colors, and we can match any custom paint color to suit your project's specific needs."
      cont2="We offer a variety of finishes, including flat, satin, gloss, high-gloss, metallic, and hammer tone, among others. Our texture options range from smooth to rough, providing solutions that can conceal surface imperfections while enhancing the overall appearance of your product."
      cont3="No matter your paint requirements, Agora Manufacturing is equipped to deliver the perfect finish for your project."
      
    />
  )
}

export default Paint;
