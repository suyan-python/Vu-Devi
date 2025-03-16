import React from "react";
import Form from "../components/Form";

function Contact() {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-between items-center bg-white px-6 lg:px-20 py-14 shadow-xl rounded-2xl">
      {/* Text Area */}
      <div className="text-area w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:px-12 text-center lg:text-left space-y-6">
        <h1 className="font-semibold text-3xl lg:text-4xl text-gray-800">
          Get in Touch with Us
        </h1>
        <p className="text-lg text-gray-600">
          Reach out to Vu Devi Services Pvt. Ltd. for any inquiries or support.
        </p>
        <div>
          <a
            href="mailto:vudeviservices@gmail.com"
            className="text-lg text-blue-600 hover:underline transition-all"
          >
            vudeviservices@gmail.com
          </a>
        </div>
        <div>
          <a
            href="tel:+9779817576110"
            className="text-lg text-blue-600 hover:underline transition-all"
          >
            +977 9817576110, 98288293162, 9841208219
          </a>
        </div>
        <p className="text-lg text-gray-500 mt-4">
          Vu Devi Services, Balkumari, Lalitpur, Nepal
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-50 p-8 lg:p-12 rounded-2xl shadow-lg">
        <Form />
      </div>
    </section>
  );
}

export default Contact;
