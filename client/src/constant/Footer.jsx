import React from "react";

function Footer()
{
  return (
    <footer className="bg-gradient-to-t from-red-800 via-red-900 to-gray-900 text-white pt-8 mb-8 w-full">
      <div className="max-w-full mx-auto px-6 sm:px-12 ">
        {/* Footer Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          {/* Company Info */}
          <div className="mb-8 sm:mb-0 w-full sm:w-1/2">
            <h3 className="text-3xl font-semibold">Vu Devi Services</h3>
            <p className="text-lg text-white mt-4 max-w-xs sm:max-w-md">
              Empowering healthcare with reliable outsourcing solutions.
              Dedicated to delivering excellence in medical documentation, data
              processing, and healthcare support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-1/3">
            <div className="flex flex-col w-full sm:w-1/2">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col w-full sm:w-1/2">
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@vudeviservices.com"
                    className="hover:underline"
                  >
                    info@vudeviservices.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:+1234567890" className="hover:underline">
                    +123-456-7890
                  </a>
                </li>
                <li>Address: Balkumari-Gwarko, Lalitpur, Nepal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="mb-8 sm:mb-0 flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>

          {/* Footer Disclaimer */}
        </div>
        <div className="text-center py-7">
          <p className=" animated-gradient-text font-light">
            &copy; 2025 Vu Devi Services Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
