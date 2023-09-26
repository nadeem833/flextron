import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-orange-200">
      <div className="w-full h-[70px] max-w-[1280px] mx-auto flex justify-between items-center ">
        {/* Section 1 */}
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            {/* Logo */}
            <div className="w-36 h-[50px] flex items-center">
              <img src="./Logo.png" alt="" className="object-cover"/>
            </div>

            {/* Burger Menu */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileDropdown}
                type="button"
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* User Dropdown */}
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              type="button"
              className="text-black h-7 w-7 rounded-full flex justify-center items-center bg-white focus:outline-none"
            >
              <FaUser />
            </button>

            {/* User Dropdown Content */}
            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Edit Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Change Password
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section 2 (Navigation Links) */}
      <div className="w-full flex justify-center h-[55px] bg-white">
        <div className="items-center justify-between hidden lg:flex space-x-6 w-full max-w-[1280px]">
          <Link to="/dashboard">
            <a className="text-black hover:text-[#f7931e]">Dashboard</a>
          </Link>
          <Link to="/calendar">
            <a className="text-black hover:text-[#f7931e]">Calendar</a>
          </Link>
          <Link to="/activity">
            <a className="text-black hover:text-[#f7931e]">Activity</a>
          </Link>
          <Link to="/link-accounts">
            <a className="text-black hover:text-[#f7931e]">Link Accounts</a>
          </Link>
          <Link to="/invite-friends">
            <a className="text-black hover:text-[#f7931e]">Invite Friends</a>
          </Link>
          <Link to="/support">
            <a className="text-black hover:text-[#f7931e]">Contact Support</a>
          </Link>
          <Link to="/make-payment">
            <a className="text-black hover:text-[#f7931e]">Make Payment</a>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileDropdownOpen && (
        <div className="lg:hidden block mt-2 w-full py-1 bg-white">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
