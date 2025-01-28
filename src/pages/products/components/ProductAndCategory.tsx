import React, { useState } from "react";
import Category from "./Category";
import Products from "./Products";

const ProductsWithCategories: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1); // Default to the first category

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 xl:px-24">
      <h1 className="text-4xl font-semibold text-gray-700/90 mb-6">
        Products
      </h1>

      {/* Category Selector */}
      <Category onSelectCategory={(id) => setSelectedCategoryId(id)} />

      {/* Products Grid */}
      <Products selectedCategoryId={selectedCategoryId} />
    </div>
  );
};

export default ProductsWithCategories;

