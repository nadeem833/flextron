import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const LandingPageNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentURL = location.pathname;
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const MenuItemStyle =
    "flex gap-2 items-center px-4 py-2 text-sm hover:bg-orange-50 hover:text-[#f7931e] cursor-pointer";
  const NavLinkStyle =
    "hover:text-[#f7931e] flex gap-2 items-center text-white";

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const NavArray = ["Feature", "About Us", "Pricing", "Contact Us"];

  return (
    <nav className="bg-black w-screen">
      <div className="w-full h-[70px] p-5 lg:p-0 max-w-[1280px] mx-auto flex justify-between items-center ">
        {/* Section 1 */}
        <div className="flex items-center justify-between w-full my-2">
          
          {/* Logo */}
          <div className="w-36 h-[50px] flex items-center">
            <img src="/LandingPageLogo.png" alt="" className="object-cover" />
          </div>

          {/* Burger Menu */}
          <div className="lg:hidden flex gap-2 items-center">
            <button
              onClick={toggleMobileDropdown}
              type="button"
              className="text-white focus:outline-none"
            >
              <RxHamburgerMenu className="text-2xl text-white" />
            </button>
          </div>

          {/* Section 2 */}
          <div className="hidden lg:flex relative gap-[50px] items-center">
            {NavArray.map((value, index) => (
              <Link
                key={index}
                to={`#${value}`}
                onClick={() => {
                  toggleMobileDropdown();
                }}
              >
                <a
                  className={`${NavLinkStyle} ${
                    currentURL.includes(`${value}`)
                      ? "text-[#f7931e]"
                      : "text-gray-700"
                  }`}
                >
                  {value}
                </a>
              </Link>
            ))}
            <button
              onClick={() => {
                navigate("sign-in");
              }}
              type="button"
              className="border border-[#F79324] text-[#F79324] h-[35px] w-auto rounded-[30px] flex justify-center items-center px-5  hover:border-[#E27A00] hover:text-[#E27A00] focus:outline-none "
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("sign-up");
              }}
              type="button"
              className="text-white h-[35px] px-5 w-auto rounded-[30px]  flex justify-center items-center bg-[#F79324] hover:bg-[#E27A00] focus:outline-none"
            >
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileDropdownOpen && (
        <div className="lg:hidden mt-2 w-full bg-black border-t border-b flex flex-col gap-2 py-5 px-4">
          {NavArray.map((value, index) => (
            <Link
              key={index}
              to={`#${value}`}
              onClick={() => {
                toggleMobileDropdown();
              }}
            >
              <a
                className={`${NavLinkStyle} ${
                  currentURL.includes(`${value}`)
                    ? "text-[#f7931e]"
                    : "text-gray-700"
                }`}
              >
                {value}
              </a>
            </Link>
          ))}
          <Link
            to={`sign-in`}
            onClick={() => {
              toggleMobileDropdown();
            }}
          >
            <a className={`${NavLinkStyle} `}>Login</a>
          </Link>
          <Link
            to={`sign-up`}
            onClick={() => {
              toggleMobileDropdown();
            }}
          >
            <a className={`${NavLinkStyle} `}>Signup</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default LandingPageNavbar;
