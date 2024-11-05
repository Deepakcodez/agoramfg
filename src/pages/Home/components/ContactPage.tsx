import { officeimg } from "@/constants/imagePath";

const Contact = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="bg-white shadow-lg mt-20 px-4 lg:px-24 rounded-lg w-full h-[5rem]">
        
        {/* Top Image */}
        <img
          src={officeimg}
          alt="Office"
          className="rounded-t-lg w-full"
        />
        
        <div className="p-8 md:p-12">
          {/* Header */}
          <h2 className="mb-6 font-bold text-3xl text-center text-gray-800">
            CONTACT US
          </h2>

          {/* Main Content Container */}
          <div className="flex lg:flex-row flex-col lg:space-x-8">

            {/* Contact Information */}
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 text-xl">Contact Information</h3>
                <p className="text-gray-600">Reach out for any queries or quotes. We’re here to help you!</p>
                <p className="font-medium text-gray-800">📞 Phone: (905) 362-1700</p>
                <p className="font-medium text-gray-800">📠 Fax: (905) 362-1370</p>
                <p className="text-gray-800">
                  📧 Email: 
                  <a href="mailto:agora@agoramfg.com" className="ml-1 text-blue-500 hover:underline">
                    agora@agoramfg.com
                  </a>
                </p>

                {/* Office Location */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800">Office Location</h4>
                  <p className="text-gray-600">
                    7770 Tranmere Drive<br />
                    Mississauga, Ontario<br />
                    L5S 1L9, Canada
                  </p>
                  <p className="mt-2 text-gray-500 text-sm">
                    15 minutes from Toronto Pearson International Airport.
                  </p>
                </div>

                {/* Office Hours and Inquiry Info */}
                <div className="mt-6 text-gray-700">
                  <p>For quotations and any other inquiries, please call, fax, or email.</p>
                  <p className="mt-1">Our office hours are 7:00 a.m. to 5:00 p.m., Monday to Friday.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div>
                  <label className="block font-medium text-gray-700 text-sm">Name</label>
                  <input
                    type="text"
                    className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 text-sm">Email Address</label>
                  <input
                    type="email"
                    className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 text-sm">Phone</label>
                  <input
                    type="tel"
                    className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 text-sm">Comments</label>
                  <textarea
                    className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 py-3 rounded-md w-full font-semibold text-white transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="mt-10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19410.32830312142!2d-79.68105894653031!3d43.68222527892587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3eebc95dcd73%3A0x62881a8f73d402e8!2sAgora%20Manufacturing!5e0!3m2!1sen!2sus!4v1730736825989!5m2!1sen!2sus"
           width="100%" 
           height="300" 
           className="border-gray-200 shadow-sm border rounded-md"
           allowFullScreen 
           loading="lazy"
           ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
