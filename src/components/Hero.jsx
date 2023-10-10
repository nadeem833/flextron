import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id='Home' className=" bg-black w-screen max-w-[1280px] mx-auto flex justify-between items-center px-4 py-8 h-auto">
      <div className="relative grid w-full mx-auto laptop:gap-8 xl:gap-0 laptop:py-16 laptop:grid-cols-12">
        <div className="mr-auto place-self-center laptop:col-span-5">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Capture Blocks Before Your Phone See's Them
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 laptop:mb-8 md:text-lg laptop:text-xl dark:text-gray-400">
            Offers auto grabber app fully customizable and secure. Our features
            includes: advanced filters, speed control, automation settings,
            logs, email notifications, text notifications, and more.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                navigate("sign-up");
              }}
              type="button"
              className="text-white h-[35px] font-normal text-sm px-5 w-auto rounded-[30px]  flex justify-center items-center bg-[#F79324] hover:bg-[#E27A00] focus:outline-none"
            >
              Get Started
            </button>
            <a
              href="#About Us"
              className="text-white border border-[#000] h-[35px] gap-2 w-auto rounded-[30px] flex justify-center items-center px-5 transition-gap duration-500 ease-in-out hover:gap-4 hover:border hover:border-[#E27A00] hover:text-[#E27A00] focus:outline-none"
            >
              Learn more <HiOutlineArrowNarrowRight className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="mt-8 laptop:mt-0 max-full laptop:col-span-7 flex justify-center">
          {/* <img
            // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            src="/Robot.gif"
            alt="mockup"
          /> */}
          <video
            className="w-[800px] md:h-[800px]"
            autoplay="autoplay"
            loop="true"
            muted
            defaultmuted
            playsinline
          >
            <source src="Robot.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute  w-full h-72 top-[90%] lg:top-[85%] border rounded-[70px] flex justify-evenly items-center bg-[#1e1e1e] brightness-[115%] bg-opacity-90">
          <div className="text-white">
            <h3 className="text-left text-white text-lg font-light font-SpaceGrotesk">Users</h3>
            <h1 className="text-left text-white text-5xl font-normal font-SpaceGrotesk">23K</h1>
          </div>
          <div className="text-white">
          <h3 className="text-left text-white text-lg font-light font-SpaceGrotesk">Offers Accepted</h3>
            <h1 className="text-left text-white text-5xl font-normal font-SpaceGrotesk">201K</h1>
          </div>
          <div className="text-white">
          <h3 className="text-left text-white text-lg font-light font-SpaceGrotesk">Overall Capture Rate %</h3>
            <h1 className="text-left text-white text-5xl font-normal font-SpaceGrotesk">92</h1>
          </div>
          <div className="text-white"> 
          <h3 className="text-left text-white text-lg font-light font-SpaceGrotesk">Invitations send</h3>
            <h1 className="text-left text-white text-5xl font-normal font-SpaceGrotesk">542</h1>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
