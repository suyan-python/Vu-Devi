import React from "react";
import logo from "../assets/logo/logo.png";

function Footer()
{
  return (
    <footer className="bg-[#133a41] text-white pt-12 pb-6 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col gap-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">

          {/* Company Info */}
          <div className="flex-1">
            <img src={logo} className="w-32 mb-4" alt="Vu Devi Services Logo" />
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-sm">
              Empowering healthcare with reliable outsourcing solutions. We are dedicated to delivering excellence in medical documentation, data processing, and healthcare support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 flex flex-col sm:flex-row gap-12">
            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-200">
                <li><a href="/" className="hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-200">
                <li>Email: <a href="mailto:vudeviservices@gmail.com" className="hover:text-red-500 transition-colors">vudeviservices@gmail.com</a></li>
                <li>Phone: <a href="tel:+977" className="hover:text-red-500 transition-colors">+977</a></li>
                <li>Address: Balkumari-Gwarko, Lalitpur, Nepal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social Media */}
          <div className="flex gap-6 text-gray-200">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors text-2xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors text-2xl">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-right">
            &copy; 2025 Vu Devi Services Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
