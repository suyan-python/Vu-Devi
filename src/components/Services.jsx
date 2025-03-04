import React from "react";

function Services() {
  return (
    <section className="relative w-full py-20">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
              className="bg-white p-6 rounded-xl shadow-lg text-center transition transform hover:scale-105 duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <button className="bg-blue-500 px-4 py-2 mt-6 rounded-full text-white self-center">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
