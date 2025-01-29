import React from "react";
import { productsData } from "./ProductsData";
import {motion} from "motion/react";



const Products: React.FC<{ selectedCategoryId: number }> = ({
  selectedCategoryId,
}) => {
  const selectedCategory = productsData.find(
    (cat) => cat.id === selectedCategoryId
  );

  return (
    <div className="mt-8">
      {selectedCategory ? (
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {selectedCategory.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedCategory.products.map((product) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={`PRODUCT_${selectedCategory.id}_${product.id}`}
                className="relative group"
              >
                <div className="h-56 md:h-64 lg:h-48 overflow-hidden rounded-lg relative">
                  <div className="bg-black/50 rounded-lg absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={product.image}
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300"
                    alt={`Product ${product.id}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-600">No products found for this category.</p>
      )}
    </div>
  );
};

export default Products;
