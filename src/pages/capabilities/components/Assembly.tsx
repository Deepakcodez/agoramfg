import CapibilityDesign from "@/components/CapibilityDesign";
import { assablyImage } from "@/constants/imagePath";

const Assembly = () => {
  const content = [
    "At Agora, we pride ourselves on maintaining the highest standards of quality when it comes to our assembly processes.",
    "You can expect all of our enclosures to be delivered fully assembled, ensuring they are ready for immediate use. Our dedication to excellence means we take care of all the assembly work for non-electrical items, which significantly reduces your workload and streamlines your process.",
    "We understand the importance of efficiency and precision in every project. Our team ensures that each product is assembled with attention to detail, offering long-lasting reliability and functionality.",
    "We also offer additional assembly services, including the integration of electrical components, custom finishes, and more. We cater to a wide range of industries, providing tailored solutions for each client's unique needs.",
    "Whether it's a small batch or a large-scale project, we work with you from start to finish to ensure your vision is realized. Our flexible approach allows us to meet tight deadlines while maintaining the highest quality standards.",
    "We work with the customer to facilitate final assembly. We manufacture (or if required source) and install items including folding shelves, door closures, 'U' plates, and ground bars. Our team is equipped with the expertise and experience to handle even the most complex assembly tasks.",
    "Our services also extend to post-assembly quality checks, ensuring that everything is functioning correctly before it leaves our facility. We provide detailed reports and support for any additional needs you may have."
  ];

  return (
    <CapibilityDesign
      title="Assembly"
      content={content}
      imageSrc={assablyImage}
      imageAlt="Assembly Process"
    />
  );
};

export default Assembly;
