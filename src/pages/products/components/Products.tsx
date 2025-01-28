import React from "react";
import { controlconsole1, controlconsole2, controlconsole3, controlconsole4, controlconsole5, controlconsole6 } from "@/constants/imagePath";
const Products: React.FC = () => {
  const products = [
    {
      id: 1, image: controlconsole1
    },
    {
      id: 2, image:controlconsole2
    },
    
    {
      id: 3, image: controlconsole3

    },
    {
      id: 4,


      image:  controlconsole4
    },
    {
      id: 5,

      image: controlconsole5

    },
    {
      id: 6,

      image:  controlconsole6
    },
    // {
    //   id: 7,

    //   image: "http://www.leovinyls.com/products/hockenium.jpg",

    // },
    // {
    //   id: 8,

    //   image: "http://www.leovinyls.com/products/nimbus_2_new_1.jpg",
    // },
    // {
    //   id: 9,

    //   image: "http://www.leovinyls.com/products/hockenium1.jpg",

    // },
    // {
    //   id: 10,

    //   image: "http://www.leovinyls.com/products/royalle_footwear.jpg",
    // },
    // {
    //   id: 11,

    //   image: "http://www.leovinyls.com/products/windermere_footwear.jpg",

    // },
    // {
    //   id: 12,

    //   image: "http://www.leovinyls.com/products/cedro.jpg",
    // },
    // {
    //   id: 13,

    //   image: "http://www.leovinyls.com/products/cedro.jpg",

    // },
    // {
    //   id: 14,

    //   image: "http://www.leovinyls.com/products/omega_furnishing.jpg",
    // },
    // {
    //   id: 15,

    //   image: "http://www.leovinyls.com/products/bremor_furnishing.jpg",

    // },
    // {
    //   id: 16,

    //   image: "http://www.leovinyls.com/products/lama_footware.jpg",
    // },
    // {
    //   id: 17,

    //   image: "http://www.leovinyls.com/products/silkymat_shoes_upholsery.jpg",
    // },
    // {
    //   id: 18,

    //   image: "http://www.leovinyls.com/products/pvc_cloth.jpg",
    // },
  ];

  return (
    <div className="pb-12 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="text-3xl sm:text-4xl font-semibold text-gray-700/90 pb-8 sm:pb-12 flex items-center ">
        <h1 className="flex items-center ">
          Products

        </h1>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={`PRODUCT_${index}`} className="relative group">
            {/* Image container */}
            <div className=" h-56 md:h-64 lg:h-72 overflow-hidden rounded-lg relative">
              {/* Overlay */}
              <div className="bg-black/50 rounded-2xl md:group-hover:top-[8rem] top-[18rem] z-40 absolute h-full w-full  left-0  duration-300"></div>
              {/* Image */}
              <img
                src={product.image}

                className="w-full h-full object-cover transform scale-125 group-hover:scale-150 transition-transform duration-300"
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
