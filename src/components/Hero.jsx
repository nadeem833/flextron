import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  const Heading='text-left text-white text-lg sm:text-sm md:text-base lg:text-lg font-light font-SpaceGrotesk'
  const Number='text-left text-white text-5xl sm:text-4xl md:text-5xl font-normal font-SpaceGrotesk'
  return (
    <section id='Home' className=" w-screen max-w-[1280px] mx-auto flex justify-between items-center px-4 py-8 h-full mb-72">
      <div className="relative grid w-full mx-auto laptop:gap-8 xl:gap-0 laptop:py-16 laptop:grid-cols-12 mb-10 sm:mb-0">
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

        <div className="absolute py-5 w-full sm:h-72 top-[90%] lg:top-[85%] border rounded-[70px] flex flex-col gap-6 sm:gap-0 sm:flex-row justify-evenly items-center bg-[#1e1e1e] brightness-[115%] bg-opacity-90 ">
          <div className='flex flex-col items-center sm:items-start'>
            <h3 className={Heading}>Users</h3>
            <h1 className={Number}>23K</h1>
          </div>
          <div className='flex flex-col items-center sm:items-start'>
          <h3 className={Heading}>Offers Accepted</h3>
            <h1 className={Number}>201K</h1>
          </div>
          <div className='flex flex-col items-center sm:items-start'>
          <h3 className={Heading}>Overall Capture Rate %</h3>
            <h1 className={Number}>92</h1>
          </div>
          <div className='flex flex-col items-center sm:items-start text'> 
          <h3 className={Heading}>Invitations send</h3>
            <h1 className={Number}>542</h1>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
