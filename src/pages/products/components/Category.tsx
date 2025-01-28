import React, { useState } from "react";
import { productsData } from "./ProductsData";

const Category: React.FC<{ onSelectCategory: (id: number) => void }> = ({
  onSelectCategory,
}) => {
  const categories = productsData.map((category) => ({
    id: category.id,
    name: category.category,
    image: category.products[0]?.image || "https://via.placeholder.com/150",
  }));

  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(categories[0].id);

  const handleCategoryClick = (id: number) => {
    setSelectedCategoryId(id);
    onSelectCategory(id);
  };

  return (
    <div className="w-full py-4 flex items-center overflow-x-scroll scrollbar-hide border-l-4">
      {categories.map((category) => (
        <div
          className={`w-[11rem] h-[9rem] p-2 flex flex-col items-center justify-start gap-2 cursor-pointer ${
            selectedCategoryId === category.id ? " border border-blue-500" : ""
          }`}
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
        >
          <div className="h-[3rem] md:h-[5rem] aspect-square rounded-full overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p
            className={`text-center text-xs sm:text-sm font-semibold ${
              selectedCategoryId === category.id ? "text-blue-600" : "text-gray-700"
            }`}
          >
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Category;
