

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
