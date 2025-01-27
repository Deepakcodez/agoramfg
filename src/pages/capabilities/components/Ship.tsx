import Capablitycontent from "./Capablitycontent"
import { assablyImage } from "@/constants/imagePath";

const Ship = () => {
  return (
    <Capablitycontent
      image={assablyImage}
      buttonText="Ship"
      cont1="Need something shipped? With Agora, it’s easy."
      cont2="We offer flexible delivery options to meet your needs. Whether it’s using our own trucks, customer trucks and accounts, or third-party shipping services, we’ve got you covered."
      cont3="Our trusted network of trucking partners enables us to efficiently ship across Canada, as well as to the US and Mexico, ensuring your materials arrive when and where you need them."
      
    />
  )
}

export default Ship;
