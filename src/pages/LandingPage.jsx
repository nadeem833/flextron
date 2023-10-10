import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Pricing from "../components/Pricing";
import ContactUs from "../components/ContactUs";
import LandingPageFooter from "../components/LandingPageFooter";
import LandingPageNavbar from "../components/LandingPageNavbar";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black">
      <LandingPageNavbar/>
      <Hero />
      <AboutUs/>
      <Pricing/>
      <ContactUs/>
      <LandingPageFooter/>
    </div>
  );
};

export default LandingPage;
