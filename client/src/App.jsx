import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./constant/Navbar";
import JobApplicationForm from "./pages/JobApplicationForm";
import ScrollToTop from "./ScrollToTop";

import "./animation.css";
import "./index.css"
import Contact from "./pages/Contact";
import FooterBT from "./constant/FooterBt";
import Services from "./pages/Services";
import Footer from "./constant/Footer";
import WholeTeam from "./pages/WholeTeam";
import DocInfo from "./bio/DocInfo";
import TeamFun from "./pages/TeamFun";
import BackgroundAnimation from "./components/BackgroundAnimation";
import AdminDashboard from "../admin/AdminDashboard";
import AdminLogin from "../admin/AdminLogin";


function AppRoutes()
{
  const location = useLocation();

  // Hide navbar & footer on admin routes
  const isAdminRoute =
    location.pathname === "/admin" ||
    location.pathname === "/admin/login";

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/application" element={<JobApplicationForm />} />
        <Route path="/team" element={<WholeTeam />} />
        <Route path="/team/:doctorId" element={<DocInfo />} />
        <Route path="/teamfun" element={<TeamFun />} />

        {/* ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      {!isAdminRoute && (
        <>
          <FooterBT />
          <Footer />
        </>
      )}
    </>
  );
}

export default function App()
{
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}
