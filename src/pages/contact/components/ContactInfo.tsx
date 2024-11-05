


const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
