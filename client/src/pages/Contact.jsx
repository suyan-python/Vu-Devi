import React from "react";

function Contact() {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-between items-center bg-gradient-to-b from-white via-gray-100 to-gray-200 px-6 lg:px-20 shadow-lg rounded-2xl">
      {/* Text Area */}
      <div className="text-area w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:px-12 text-center lg:text-left space-y-4">
        <h1 className="font-bold text-3xl lg:text-5xl text-gray-800">
          Get in Touch
        </h1>
        <p className="text-lg lg:text-xl text-gray-600">
          Vu Devi Services Pvt. Ltd.
        </p>
        <div>
          <a
            href="mailto:jewel.himalayan.2021@gmail.com"
            className="text-lg text-blue-500 hover:underline"
          >
            vudeviservices@gmail.com
          </a>
        </div>
        <div>
          <a
            href="tel:+9779817576110"
            className="text-lg text-blue-500 hover:underline"
          >
            +977 9817576110, 98288293162, 9841208219
          </a>
        </div>
        <p className="text-lg text-gray-500">
          Vu Devi Services, Balkumari, Lalitpur
        </p>
      </div>

      {/* Map Section */}
      <div className="w-full lg:mt-0 flex justify-center items-center p-6 lg:p-12 rounded-2xl">
        <div className="flex items-center px-4 w-full max-w-3xl bg-white p-8 rounded-lg shadow-xl border border-gray-300">
          <div className="w-full h-96 overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.84505588054168!2d85.33343193813188!3d27.670291154199543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9079a4adb%3A0xab20f3b73dc8adac!2sInaya%20Cafe!5e0!3m2!1sen!2snp!4v1742110639291!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
