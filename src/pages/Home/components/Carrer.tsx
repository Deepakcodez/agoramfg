const CareersSidebar = () => {
  return (
    <div className="flex md:flex-row flex-col bg-gray-100 min-h-screen">
      <div className="flex flex-col justify-center bg-blue-900 p-8 w-full md:w-1/3 text-white  md:text-lg text-sm">
        <h3 className="mt-20 font-semibold text-xl ">Contact Us</h3>
        <p className="mt-4">7770 Tranmere Drive</p>
        <p>Mississauga, Ontario L5S 1L9, Canada</p>
        <p className="mt-4">Phone: (905) 362-1700</p>
        <p>Fax: (905) 362-1370</p>
        <p className="mt-8 font-light">Agora Manufacturing</p>
      </div>

      <div className="flex flex-col justify-center bg-white p-6 md:p-12 w-full md:w-2/3">
        <h2 className="font-semibold text-2xl text-blue-900">Join Our Team!</h2>
        <p className="mt-4 text-gray-900 text-sm md:text-base">
          We offer competitive wages, benefits and a clean, professional environment in which to work.
        </p>
        <p className="mt-4 text-gray-900 text-sm md:text-base">
          Are you highly skilled in metal fabrication? Agora Manufacturing is looking for skilled individuals to fill current and future opportunities.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 text-lg">
            CURRENTLY HIRING FOR THE FOLLOWING POSITIONS:
          </h3>
          <ul className="mt-2 text-gray-600 list-disc list-inside text-sm md:text-base">
            <li>General Labourers</li>
            <li>Break Press Operators</li>
            <li>Shippers</li>
          </ul>
        </div>
        <p className="mt-6 text-gray-700 text-sm md:text-base">
          To apply, email your resume to <span className="font-semibold">careers@agoramfg.com</span>.
        </p>
        <p className="mt-1 text-gray-500 text-sm italic">
          Only qualified candidates will be contacted.
        </p>
      </div>
    </div>
  );
};

export default CareersSidebar;
