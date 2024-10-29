const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="mx-auto mt-20 max-w-6xl">
        {" "}
        {/* Container for img text section */}
        <div className="items-center gap-8 grid md:grid-cols-2 mb-12">
          {" "}
          {/* Section 1 */}
          {/* Image section 1 */}
          <img
            src="https://via.placeholder.com/400x300"
            alt="image"
            className="rounded-lg w-full h-full object-cover"
          />
          <div>
            {" "}
            {/* Text section 1 */}
            <h2 className="font-semibold text-2xl text-blue-700"></h2>
            <p className="mt-4 text-gray-700">
              Recently, we were given the opportunity to partner with the only
              load bank manufacturer in Ontario. We welcomed the challenge and
              worked hand in hand with our new customer, starting from the
              conceptual design to installation.
            </p>
            <p className="mt-4 text-gray-700">
              Six months later, we are proud to announce that we have
              successfully completed our third load bank of the year. The load
              banks will be used for load testing and battery backup systems for
              hospitals and large data centers, etc. Please view a few pictures
              below and more on our products page.
            </p>
          </div>
        </div>
        {/* Section 2 */}
        <div className="items-center gap-8 grid md:grid-cols-2 mb-12">
          <div>
            {" "}
            {/* Text section 2 */}
            <h2 className="font-semibold text-2xl text-blue-700"></h2>
            <p className="mt-4 text-gray-700">
            Earlier this month, Agora Manufacturing proudly sponsored a Robotics team at the FIRST Robotics tournament. 
            Not only did the team do great, but the robot appeared on the Rick Mercer show, he was following a team from Stoney Creek! See pictures below.
            </p>
            <p className="mt-4 text-gray-700">
            The excitement was palpable as the team showcased their robot, demonstrating remarkable engineering and programming skills that truly impressed the judges and audience alike. 
            </p>
           
          </div>
          <img
            src="https://via.placeholder.com/400x300"
            alt="image"
            className="rounded-lg w-full h-full object-cover"
          />{" "}
          {/* Image section 2 */}
        </div>
        {/* Section 3 */}
        <div className="items-center gap-8 grid md:grid-cols-2 mb-12">
          {/* Image section 3 */}
          <img
            src="https://via.placeholder.com/400x300"
            alt="image"
            className="rounded-lg w-full h-full object-cover"
          />

          {/* Text section 3 */}
          <div>
            <h2 className="font-semibold text-2xl text-blue-700"></h2>
            <p className="mt-4 text-gray-700">
            In December 2020 we held our sixth annual food drive in support of the Mississauga Food Bank , which to date, was our most successful year. With the amazing generosity from all employees we were able to well surpass our target. We would like to thank everyone for the outpouring of donations we received for our neighbors in need. 
            We are happy to make a small difference in the community and look forward to doing so again in the upcoming year!
            </p>
            <p className="mt-4 text-gray-700">
            The success of this initiative was made possible by the collective efforts of our dedicated team members,
             who came together with a shared commitment to support those in need within our community. 
            </p>
          </div>
        </div>
        {/* Section 4 */}
        <div className="items-center gap-8 grid md:grid-cols-2 mb-12">
          {/* Text section 4 */}
          <div>
            <h2 className="font-semibold text-2xl text-blue-700"></h2>
            <p className="mt-4 text-gray-700">
              Recently, we were given the opportunity to partner with the only
              load bank manufacturer in Ontario. We welcomed the challenge and
              worked hand in hand with our new customer, starting from the
              conceptual design to installation.
            </p>
            <p className="mt-4 text-gray-700">
              Six months later, we are proud to announce that we have
              successfully completed our third load bank of the year. The load
              banks will be used for load testing and battery backup systems for
              hospitals and large data centers, etc. Please view a few pictures
              below and more on our products page.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/400x300"
            alt="image"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
