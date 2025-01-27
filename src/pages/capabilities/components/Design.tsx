import Capablitycontent from "./Capablitycontent"
import { designImage } from "@/constants/imagePath";

const Design = () => {
  return (
    <Capablitycontent
      image={designImage}
      buttonText="Design"
      cont1="Manufacturing custom enclosures and various products requires significant design to ensure a quality end product. At Agora Manufacturing, we have a strong team of engineers with decades of experience."
      cont2="Our engineers will explore all alternatives and suggest solutions specifically tailored to meet your custom needs, while reducing costs and streamlining the manufacturing process."
      cont3="Whether you have a basic sketch, an idea, or a CAD drawing, our engineers will work directly with you to bring your project to life. With close attention to strength, quality, versatility, and appearance, our engineers generate a two or three-dimensional representation of the product, offering suggestions to improve the design."
      cont4="Proto-types are common in the industry, as there is often uncertainty as to whether a new design will do what is desired. We have the knowledge and experience to custom design what you need. No conceptual stage is too early, and no project is too big or small. Contact us today!"
    />
  )
}

export default Design;
