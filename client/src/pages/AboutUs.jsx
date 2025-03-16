import React from "react";

function AboutUs() {
  return (
    <section className="relative py-16 px-6  overflow-hidden">
      {/* Blurred Blue Gradient Background */}
      <div className="absolute inset-0 flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(0,102,255,0.4)_0%,_rgba(0,102,255,0)_70%)] before:blur-3xl before:opacity-80"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold  text-center mb-10">
          Welcome to <span className="text-blue-500">Vu Devi Services</span>
        </h2>

        {/* Company Overview */}
        <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h3>
          <p className="text-gray-600">
            Vu Devi Services is a trusted partner in{" "}
            <strong>
              medical documentation, data processing, and healthcare support
              services
            </strong>
            . Our mission is to provide{" "}
            <strong>accurate, compliant, and efficient</strong> solutions for
            global healthcare providers. With a team of industry experts and
            cutting-edge technology, we empower businesses to focus on what
            truly matters—
            <strong>delivering exceptional patient care</strong>.
          </p>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-xl shadow-md border-l-4 border-blue-700 bg-white">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              🎯 Our Vision
            </h3>
            <p className="text-gray-700">
              To be the <strong>leading provider</strong> of medical
              documentation and healthcare support, ensuring
              <strong> efficiency, compliance, and innovation</strong> in the
              industry.
            </p>
          </div>

          <div className="p-8 rounded-xl shadow-md border-l-4 border-green-700 bg-white">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              🌟 Our Mission
            </h3>
            <p className="text-gray-700">
              Our mission is to deliver{" "}
              <strong>precise, high-quality services</strong> while maintaining
              the highest
              <strong>
                {" "}
                ethical standards, efficiency, and technological advancement
              </strong>
              .
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Core Values
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>
              <strong>Integrity:</strong> We operate with honesty and
              transparency.
            </li>
            <li>
              <strong>Excellence:</strong> We strive for top-tier quality in
              every service.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace technology for smarter
              solutions.
            </li>
            <li>
              <strong>Customer-Centric:</strong> Our clients' success is our
              priority.
            </li>
            <li>
              <strong>Ethical Practices:</strong> Sustainability and compliance
              are at our core.
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="p-8 rounded-xl transition duration-300 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Vu Devi Services?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-blue-600">Expertise</h4>
              <p>
                10+ years of experience in{" "}
                <strong>medical documentation & healthcare outsourcing</strong>.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-blue-600">Compliance</h4>
              <p>
                Adhering to{" "}
                <strong>global medical standards & regulations</strong>.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-blue-600">
                Advanced Technology
              </h4>
              <p>
                Utilizing the latest{" "}
                <strong>AI-driven documentation tools</strong>.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-blue-600">Global Reach</h4>
              <p>
                Serving <strong>clients worldwide</strong> with 24/7 operational
                support.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="bg-white p-12 rounded-xl shadow-lg transition duration-300 text-center mb-12">
          <h3 className="text-3xl font-semibold text-blue-500 mb-6">
            Meet Our Founder
          </h3>

          {/* Two-Column Layout */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
            {/* Left Column: Image & Name */}
            <div className="flex flex-col items-center">
              {/* Image Container */}
              <div className="w-80 h-96 md:w-96 md:h-[500px] overflow-hidden rounded-2xl shadow-lg border border-gray-300">
                <img
                  src="/path-to-founder-image.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name & Designation */}
              <p className="text-blue-500 font-semibold text-2xl mt-4">
                Mr. Binayak Malla
              </p>
              <p className="text-gray-600 text-lg">
                Founder & CEO, Vu Devi Services
              </p>
            </div>

            {/* Right Column: Introduction & Vision */}
            <div className="max-w-md text-left">
              <p className="text-gray-900 text-6xl font-extrabold leading-tight">
                Hi, there <p className="text-blue-500"> I'm Binayak!</p>
              </p>
              <p className="text-gray-700 text-lg mt-4">
                A passionate entrepreneur, innovator, and problem-solver. My
                journey began with a simple goal: to create technology-driven
                solutions that make a difference.
              </p>

              <p className="text-gray-700 text-lg mt-4">
                With over a decade of experience in industry transformation, I
                believe in the power of
                <span className="text-gray-900 font-semibold">
                  {" "}
                  innovation, strategy, and people
                </span>
                to drive success. At Vu Devi Services, we don’t just build
                businesses—we build <i>impactful solutions</i>.
              </p>

              <p className="text-gray-800 font-semibold text-lg mt-6">
                "Great ideas start with a vision, but success comes from
                action."
              </p>

              <div className="mt-6">
                <button className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-gray-700 transition">
                  Learn More About Our Vision
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
