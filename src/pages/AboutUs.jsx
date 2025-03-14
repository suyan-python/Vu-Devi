import React from "react";

function AboutUs() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Welcome to <span className="text-blue-600">Vu Devi Services</span>
        </h2>

        <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300">
          {/* Section Title */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h3>
          <p className="text-gray-600">
            Vu Devi Services is dedicated to providing world-class coffee
            services. We bridge the gap between coffee farmers and coffee lovers
            by ensuring premium quality coffee that is ethically sourced and
            sustainably produced.
          </p>

          <p className="mt-4 text-gray-600">
            Our journey began with a passion for coffee and a vision to support
            local farmers by promoting fair trade practices. We collaborate with
            small-scale farmers, ensuring they receive fair wages and
            sustainable support while producing the finest coffee beans.
          </p>

          <p className="mt-4 text-gray-600">
            At Vu Devi Services, we believe coffee is more than just a
            drink—it's an experience, a culture, and a way of bringing people
            together. Our mission is to provide high-quality coffee while
            upholding values of sustainability, ethical business practices, and
            social responsibility.
          </p>

          <div className="mt-6 p-6 bg-blue-50 rounded-xl shadow-md border-l-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              🌍 Our Commitment to Sustainability
            </h3>
            <p className="text-gray-700">
              We are dedicated to sustainable coffee farming and ethical
              sourcing. Our commitment includes supporting small-scale farmers,
              ensuring fair wages, and promoting environmentally friendly
              farming methods. By choosing Vu Devi Services, you are not only
              enjoying premium coffee but also supporting a sustainable and
              ethical coffee industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
