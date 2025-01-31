import { officeimg } from "@/constants/imagePath";
import ContactForm from "@pages/contact/components/ContactForm";
import ContactInfo from "@pages/contact/components/ContactInfo";
import ContactMap from "@pages/contact/components/ContactMap";

const ContactPage = () => {
  return (
    <>
      <div className="flex justify-center  h-auto">
        <div className="bg-white px-4 lg:px-24 rounded-lg w-full ">
          {/* Top Image */}
          <img
            src={officeimg}
            alt="Office"
            className="mt-28 rounded-t-lg w-full "
          />

          <div className="py-8 md:py-12">
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
          </div>
        </div>
      </div>
      <ContactMap />
    </>
  );
};

export default ContactPage;
