import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./constant/Navbar";
import JobApplicationForm from "./pages/JobApplicationForm";
import ScrollToTop from "./ScrollToTop";

import "./animation.css";
import Contact from "./pages/Contact";
import FooterBT from "./constant/FooterBt";
import Services from "./pages/Services";
import Footer from "./constant/Footer";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/application" element={<JobApplicationForm />} />
        </Routes>
        <FooterBT />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
