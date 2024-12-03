import Capablitycontent from "./Capablitycontent"

import assablyImage from '/public/assests/images/products/100.jpg'
const Assembly = () => {
    return (
        <Capablitycontent
            image={assablyImage}
            buttonText="Assembly"
            cont1="We, at Agora, maintain the highest quality assembly."
            cont2="You can expect all of our enclosures to come fully assembled and ready to go.  "
            cont3="We do all of the assembly necessary of non-electrical items to minimize work for you!"
            cont4="We work with the customer to facilitate final assembly. We manufacture (or if required source) and install items including folding shelves, door closures, U plates and ground bars."
            cont4style="font-semibold mt-3 "
        />
    )
}
export default Assembly