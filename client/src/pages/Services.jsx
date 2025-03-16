import React from "react";
import { NavLink } from "react-router-dom";

function Services() {
  return (
    <section className="w-full py-16 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-blue-500">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Medical Documentation",
              description:
                "Accurate and compliant medical reports tailored to global standards.",
            },
            {
              title: "Data Processing",
              description:
                "Efficient data handling and analytics for healthcare institutions.",
            },
            {
              title: "Healthcare Support",
              description:
                "End-to-end backend support ensuring seamless healthcare operations.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg text-center transition transform hover:scale-105 hover:shadow-xl duration-300 flex flex-col justify-between min-h-[250px]"
            >
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-blue-500 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg md:text-lg">
                  {service.description}
                </p>
              </div>
              <button className="bg-blue-500 px-6 py-3 mt-6 rounded-full text-white font-medium hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                <NavLink to={"/services"}>Learn More</NavLink>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
