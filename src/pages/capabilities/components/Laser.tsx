import Capablitycontent from './Capablitycontent'
import laserImage from '/public/assests/images/products/109.jpg'

const Laser = () => {
  return (
    <Capablitycontent
      image={laserImage}
      buttonText="Laser"
      cont1="Laser cutting is one of the most precise and efficient methods for cutting metal, and Agora Manufacturing utilizes two advanced Trumpf laser machines to deliver exceptional results. These machines allow us to produce parts with outstanding precision, superior finishes, and intricate details and markings."
      cont2="The speed of our laser cutting technology increases productivity while reducing both costs and fabrication lead times, allowing us to meet your urgent requirements at competitive prices. Whether you need a single part or a large production run, the sophistication of our machines ensures consistency, guaranteeing that each cut meets your exact specifications."
      cont3="Our laser machines can cut the following materials to the specified thicknesses:"
      cont4={`Mild Steel: Up to 0.75" | Stainless Steel: Up to 0.625" | Aluminum: Up to 0.5" | Copper: Up to 0.16" | Brass: Up to 0.16"`}
    />
  )
}

export default Laser;
