import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="my-4 text-white">
      <div className="flex justify-between shadow-xl items-center rounded-xl mx-32 px-2 py-3">
        <div className="">
          <h1>Vu Devi Services</h1>
        </div>
        <div>
          <div className="items-center flex gap-7  justify-end w-3xl">
            <div className="items">
              <NavLink to="/" className="text-white hover:text-gray-200">
                Home
              </NavLink>
            </div>
            <div className="items">
              <NavLink to="/about" className="text-white hover:text-gray-200">
                Us
              </NavLink>
            </div>
            <div className="items">
              <NavLink
                to="/services"
                className="text-white hover:text-gray-200"
              >
                Services
              </NavLink>
            </div>
            <div className="items">
              <NavLink to="/contact" className="text-white hover:text-gray-200">
                Contact
              </NavLink>
            </div>
            <div className="items">
              <NavLink to={"/application"}>
                <button className="border-2 border-blue-800 text-white px-3 py-1.5 rounded-2xl hover:bg-blue-800 hover:text-white transition-all hover:cursor-pointer">
                  Apply for job
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
