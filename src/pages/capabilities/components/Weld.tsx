import Capablitycontent from "./Capablitycontent"
import { weldImage } from "@/constants/imagePath";

const Weld = () => {
  return (
    <Capablitycontent
      image={weldImage}
      buttonText="Weld"
      cont1="Agora Manufacturing boasts a skilled and highly motivated team of CWB-certified welders, committed to delivering superior results. Our welders are experts in working with a variety of materials, including mild steel, stainless steel, structural steel, and aluminum, ensuring the flexibility to tackle any project."
      cont2="Equipped with the latest in welding technology, combined with precision engineering, refined welding techniques, and custom-designed fixtures, we guarantee welds of the highest quality. Whether it’s large-scale enclosures, complex housings, structural frames, bases, or even small wall-mounted boxes, our team is equipped to handle all types of welding challenges."
      cont3="We take pride in delivering custom welding solutions, advanced technology, and diverse material expertise to meet the highest standards of quality and precision."
      
    />
  )
}

export default Weld;
