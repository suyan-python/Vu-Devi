import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import logo from "../assets/logo/logo.png";

function Footer()
{
  return (
    <footer className="bg-[#133a41] text-white pt-16 pb-24 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col gap-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Company Info */}
          <div>
            <img src={logo} className="w-36 mb-6" alt="Vu Devi Services Logo" />
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xs">
              Empowering healthcare with reliable outsourcing solutions. We deliver
              excellence in medical documentation, data processing, and healthcare
              support worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-200">
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-red-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:vudeviservices@gmail.com"
                  className="hover:text-red-400 transition-colors"
                >
                  vudeviservices@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+9779817576110"
                  className="hover:text-red-400 transition-colors"
                >
                  +977 9817576110
                </a>
              </li>
              <li>Address: Balkumari-Gwarko, Lalitpur, Nepal</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social Media */}
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-red-500 transition-colors"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-red-500 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-red-500 transition-colors"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a> */}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Vu Devi Services Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
