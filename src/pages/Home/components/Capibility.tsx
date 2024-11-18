

const Design = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Main Layout with Sidebar and Content */}
      <div className="flex flex-col  mt-20 lg:flex-row bg-white shadow-lg rounded-lg">
        {/* Main Content */}
        <div className="flex-1 pr-6 lg:border-r-2 border-red-500 mb-6 lg:mb-0">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Design</h1>
          <p className="text-lg text-gray-700 mb-6">
            Manufacturing custom enclosures and various products requires significant design to ensure a quality end product. At Agora Manufacturing we have a strong team of engineers with decades of experience. Our engineers will explore all alternatives, and suggest solutions specifically tailored to meet your custom needs, while reducing costs and streamlining the manufacturing process.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Whether you have a basic sketch, an idea, or a CAD drawing, our engineers will work directly with you to bring your project to life. With close attention to strength, quality, versatility and appearance, our engineers generate a two or three-dimensional representation of the product, while offering suggestions to better the design. The final drawing is then approved before proceeding to production.
          </p>
          <p className="text-lg text-gray-700">
            Proto-types are common in the industry, as there is often uncertainty as to whether a new design will do what is desired. We have the knowledge and experience to custom design what you need, no conceptual stage is too early, no project is too big or too small, contact us today!
          </p>
        </div>

        {/* Sidebar with Quick Links and Contact Us */}
        <div className="w-full lg:w-64 bg-gray-100 text-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Links</h2>
          <ul className="space-y-4 mb-8">
          <li>
              <a href="#design" className="text-lg text-gray-700 hover:bg-red-500 hover:text-white px-2 py-1">Design</a>
            </li>
            <li>
              <a href="#laser" className="text-lg text-gray-700 hover:bg-red-500 hover:text-white px-2 py-1">Laser</a>
            </li>
            <li>
              <a href="#form" className="text-lg text-gray-700 hover:bg-red-500 hover:text-white px-2 py-1">Form</a>
            </li>
            <li>
              <a href="#weld" className="text-lg text-gray-700 hover:bg-red-500  hover:text-white px-2 py-1">Weld</a>
            </li>
            <li>
              <a href="#paint" className="text-lg text-gray-700 hover:bg-red-500 hover:text-white  px-2 py-1">Paint</a>
            </li>
            <li>
              <a href="#ship" className="text-lg text-gray-700 hover:bg-red-500 px-2 hover:text-white py-1">Ship</a>
            </li>
            <li>
              <a href="#assembly" className="text-lg text-gray-700 hover:bg-red-500 hover:text-white px-2 py-1">Assembly</a>
            </li>
          </ul>

          {/* Contact Us Section */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Phone:</span> (905) 362-1700
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Fax:</span> (905) 362-1370
            </p>
           
            <h4 className="text-lg font-semibold text-gray-800 mt-4">Head Office:</h4>
            <p className="text-lg text-gray-700">
              7770 Tranmere Drive<br />
              Mississauga, Ontario<br />
              L5S 1L9, Canada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
