
import { landingImage } from '@/constants/imagePath';
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col items-center bg-white shadow-lg mx-auto mt-[10%] p-8 rounded-lg max-w-4xl">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={landingImage}
          alt="Image"
          className="rounded-lg w-[80vw] h-[50vh]"
        />
      </div>

      {/* Text Section */}
      <div className="mt-6 md:mt-0 md:pl-8 md:w-1/2 text-left">
        <h2 className="font-semibold text-3xl text-gray-800">You’re in good hands</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi iste numquam enim alias nulla recusandae cupiditate omnis
        natus, qui saepe repellendus dolor aperiam facere iure! Laboriosam quasi saepe quisquam praesentium? Velit possimus saepe iusto eos consequatur, id eaque a.
        </p>
        <button className="bg-black hover:bg-gray-800 mt-6 px-6 py-2 rounded text-white transition duration-300">
          Learn more &rarr;
        </button>
      </div>
    </div>
  );
};

export default About