

const ContactForm = () => {
  return (
    <>
      <h2 className="mb-6 font-bold text-3xl text-center text-black/70">
        CONTACT US
      </h2>

      <form className="space-y-6">
        <div>
          <label className="block font-medium text-gray-700 text-sm pb-2">Name</label>
          <input
            type="text"
            className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center gap-6">
          <div className="w-full">
            <label className="block font-medium text-gray-700 text-sm pb-2">Email Address</label>
            <input
              type="email"
              className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="w-full">
            <label className="block font-medium text-gray-700 text-sm pb-2">Phone</label>
            <input
              type="tel"
              className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Phone Number"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm pb-2">Message</label>
          <textarea
            className="px-4 py-2 min-h-[5rem] max-h-[10rem] resize-none border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </>

  );
};

export default ContactForm;
