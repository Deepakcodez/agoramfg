import { FC } from "react";

interface DesignProps {
  title: string;
  content: string[];
  imageSrc: string;
  imageAlt: string;
}

const CapibilityDesign: FC<DesignProps> = ({ title, content, imageSrc, imageAlt }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-10 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        {content.map((paragraph, index) => (
          <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
        ))}
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-3/4 h-auto rounded-lg shadow-md"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CapibilityDesign;
