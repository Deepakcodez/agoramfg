import { officeimg } from "@/constants/imagePath";
import  ContactForm  from '@pages/contact/components/ContactForm'
import  ContactInfo  from '@pages/contact/components/ContactInfo'
import  ContactMap  from '@pages/contact/components/ContactMap'

const ContactPage = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="bg-white shadow-lg px-4 lg:px-24 rounded-lg w-full h-[5rem]">
        
        {/* Top Image */}
        <img
          src={officeimg}
          alt="Office"
          className="mt-28 rounded-t-lg w-full"
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
              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
          </div>
          
          <ContactMap />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
