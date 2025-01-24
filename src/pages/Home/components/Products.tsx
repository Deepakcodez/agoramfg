import { product11, product13, product18, product19, product21, product22, product23, product24, product25, product26, product27, product28, product29, product31, product32, product33 } from "@/constants/imagePath";

const Productspage = () => {
  const productImages = [
    { id: 1, src: product11, alt: "Product 1" },
    { id: 2, src: product13, alt: "Product 2" },
    { id: 3, src: product18, alt: "Product 3" },
    { id: 4, src: product19, alt: "Product 4" },
    { id: 5, src: product21, alt: "Product 5" },
    { id: 6, src: product22, alt: "Product 6" },
    { id: 7, src: product23, alt: "Product 7" },
    { id: 8, src: product24, alt: "Product 8" },
    { id: 9, src: product25, alt: "Product 9" },
    { id: 10, src: product26, alt: "Product 10" },
    { id: 11, src: product27, alt: "Product 11" },
    { id: 12, src: product28, alt: "Product 12" },
    { id: 13, src: product29, alt: "Product 13" },
    { id: 14, src: product31, alt: "Product 14" },
    { id: 15, src: product32, alt: "Product 15" },
    { id: 16, src: product33, alt: "Product 16" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-900 py-6 h-32 mt-10 flex items-center justify-center">
        <h1 className="text-center text-4xl text-white font-bold">Products</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col sm:flex-row mt-8 items-center sm:items-start justify-center">
        {/* Sidebar */}
        <aside className="w-full sm:w-1/5 bg-white shadow-md p-6 mb-6 sm:mb-0 text-center sm:text-left">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Galleries</h2>
          <ul className="space-y-4">
           
            <li className="cursor-pointer hover:text-blue-700 ">19" & 24" Racks</li>
            <li className="cursor-pointer hover:text-blue-700 ">Single Door Enclosures</li>
            <li className="cursor-pointer hover:text-blue-700 ">Multi Door Enclosures</li>
            <li className="cursor-pointer hover:text-blue-700 ">Large Housings</li>
            <li className="cursor-pointer hover:text-blue-700 ">Transformer Housings</li>
            <li className="cursor-pointer hover:text-blue-700 ">Control Consoles</li>
            <li className="cursor-pointer hover:text-blue-700 ">Misc. Parts</li>
            <li className="cursor-pointer hover:text-blue-700 ">Small Boxes & Wallmounts</li>
            <li className="cursor-pointer hover:text-blue-700 ">Load Banks</li>
          </ul>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-700">T: (905)362-1700</p>
            <p className="text-gray-700">F: (905)362-1370</p>
            <p className="text-gray-700 mb-4">
              E:{" "}
              <a href="mailto:agora@agoramfg.com" className="text-blue-700 underline">
                agora@agoramfg.com
              </a>
            </p>
            <h4 className="text-lg font-semibold mb-2">Head Office:</h4>
            <p className="text-gray-700">7770 Tranmere Drive</p>
            <p className="text-gray-700">Mississauga, Ontario</p>
            <p className="text-gray-700">L5S 1L9, Canada</p>
          </div>
        </aside>

        {/* Products Section */}
        <main className="flex-1 bg-gray-50 p-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Loop over the product images */}
            {productImages.map(({ id, src, alt }) => (
              <div
                key={id}
                className="group relative bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* Product Image */}
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-auto max-h-40 object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{alt}</h3>
                    <p className="text-sm">Click to learn more</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Productspage;
