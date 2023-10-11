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
       <div className="relative overflow-x-hidden">
      <LandingPageNavbar />
      </div>
      <div className="relative h-auto overflow-x-hidden">
      <Hero />
      <div className="hidden 2xl:flex absolute top-0 -right-[10%] w-[400px] h-[400px] rounded-full justify-end bg-[#fdaa4f] blur-[165px] opacity-[0.13]" />
      <div className="hidden 2xl:flex absolute top-44 left-[10%] w-[400px] h-[400px] rounded-full justify-end bg-[#fdaa4f] blur-[165px] opacity-[0.13]" />
      </div>
      
      <div className="relative overflow-x-hidden">
        <AboutUs />
        <div className="hidden 2xl:flex absolute top-[10%] -right-[10%] w-[800px] h-[800px] rounded-full justify-end bg-[#fdaa4f] blur-[165px] opacity-[0.07]" />

        <Pricing />
        <div className="hidden 2xl:flex absolute top-[54%] -right-20 w-[450px] h-[450px] justify-end z-[99999]">
          <img
            src="/MoneyBag.png"
            alt="Not working"
            className="object-contain w-auto h-full z-[99999]"
          />
        </div>

        <div className="hidden 2xl:flex absolute top-[72%] -right-28 w-[450px] h-[450px] rounded-full justify-end bg-[#f79324] blur-[165px] opacity-[0.15]" />

        <div className="hidden 2xl:flex absolute top-[50%] -left-28 w-[450px] h-[450px] rounded-full justify-end bg-[#f79324] blur-[165px] opacity-10" />
      </div>
      <ContactUs />
      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
