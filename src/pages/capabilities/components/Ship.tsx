import CapibilityDesign from "@/components/CapibilityDesign";
import { assablyImage } from "@/constants/imagePath";

const Ship = () => {
  const content = [
    "Need something shipped? Not a problem – Agora has you covered. We understand the importance of timely and reliable delivery for your business, which is why we offer flexible shipping solutions to meet your needs. Whether it’s a one-time delivery or ongoing shipments, we’re here to ensure everything runs smoothly.",
  
    "We can arrange our own fleet of trucks to deliver any materials your business requires, ensuring prompt and safe delivery. Our fleet is fully equipped to handle a variety of materials, providing you with peace of mind that your goods are in capable hands. Additionally, we have the flexibility to work with customer-owned trucks and accounts, as well as coordinate shipments through third-party carriers, giving you the most convenient and cost-effective options.",
  
    "Our robust logistics network includes a group of trusted and reliable trucking companies with the capability to ship materials not only across Canada, but also into the United States and Mexico. This global reach means that no matter where your business needs to send or receive materials, Agora can ensure it arrives on time, at competitive pricing, and in excellent condition.",
  
    "At Agora, we go the extra mile to make sure your logistics process is as seamless as possible. Our team works closely with you to determine the best shipping options based on urgency, budget, and destination. We also offer tracking services, allowing you to stay informed about the progress of your shipments every step of the way.",
  
    "Our experience and commitment to customer satisfaction extend to handling delicate or high-value materials. We understand that some shipments require extra care, and our specialized teams ensure that your products are securely packaged and handled with the utmost attention to detail. From small parcels to large-scale deliveries, we have the capabilities to meet all of your shipping needs."
  ];
  
  
  return (
    <CapibilityDesign
      title="Ship"
      content={content}
      imageSrc={assablyImage}
      imageAlt="ship Process"
    />
  );
}

export default Ship;
