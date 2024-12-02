import Capablitycontent from "./Capablitycontent"
import formImage from '/public/assests/images/products/108.jpg'

const Form = () => {
  return (
    <Capablitycontent
      image={formImage}
      buttonText="Form"
      cont1="Agora Manufacturing provides top-tier metal fabrication services. Our team is made up of highly skilled, certified metal fitters, and we are equipped with advanced 6-axis CNC brake presses."
      cont2="We have the capacity to handle projects of any size and complexity, ensuring we can meet your unique requirements."
      cont3="Our facilities can accommodate parts up to 12 feet in length, and we have the power to bend steel up to 3/8” thick with a force of 200 tonnes."
      cont4="No matter the challenge, Agora Manufacturing has the expertise and resources to get the job done with precision and efficiency."
    />
  )
}

export default Form;
