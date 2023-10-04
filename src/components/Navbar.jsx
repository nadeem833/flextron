import React, { useState } from "react";
import { BsCalendar3, BsCreditCard2Front } from "react-icons/bs"; // Fixed import for BsCalendar3
import { FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuActivitySquare, LuLayoutDashboard } from "react-icons/lu"; // Imported LuActivitySquareFill
import { ImLink } from "react-icons/im"; // Imported ImLink
import { BiGift, BiLogOut } from "react-icons/bi"; // Imported BiGift
import { RiCustomerService2Fill, RiLockPasswordLine } from "react-icons/ri"; // Imported RiCustomerService2Fill
import { AiOutlineUser } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { logoutSuccess } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentURL = location.pathname;
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const MenuItemStyle =
    "flex gap-2 items-center px-4 py-2 text-sm hover:bg-orange-50 hover:text-[#f7931e] cursor-pointer";
  const NavLinkStyle = "hover:text-[#f7931e] flex gap-2 items-center";

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-orange-200 w-screen">
      <div className="w-full h-[70px] p-5 lg:p-0 max-w-[1280px] mx-auto flex justify-between items-center ">
        {/* Section 1 */}
        <div className="flex items-center justify-between w-full">
          <div className="hidden lg:flex">
            {/* Logo */}
            <div className="w-36 h-[50px] flex items-center">
              <img src="/Logo.png" alt="" className="object-cover" />
            </div>
          </div>

          {/* Burger Menu */}
          <div className="lg:hidden flex gap-2 items-center">
              <img src="/SmallLogo.png" alt="" className="object-cover w-[50px] h-[60px]" />
            <button
              onClick={toggleMobileDropdown}
              type="button"
              className="text-white focus:outline-none"
            >
              <RxHamburgerMenu className="text-2xl text-gray-900" />
            </button>
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
                  <p
                    onClick={() => {
                      navigate("/profile");
                      toggleDropdown();
                    }}
                    className={`${MenuItemStyle} ${
                      currentURL.includes("profile")
                        ? "text-[#f7931e]"
                        : "text-gray-700"
                    }`}
                  >
                    <AiOutlineUser />
                    Edit Profile
                  </p>
                  <p
                    onClick={() => {
                      navigate("/change-password");
                      toggleDropdown();
                    }}
                    className={`${MenuItemStyle} ${
                      currentURL.includes("change-password")
                        ? "text-[#f7931e]"
                        : "text-gray-700"
                    }`}
                  >
                    <RiLockPasswordLine />
                    Change Password
                  </p>
                  <p
                    onClick={() => {
                      navigate("/sign-in");
                      dispatch(logoutSuccess());
                      toggleDropdown();
                    }}
                    className={`${MenuItemStyle} `}
                  >
                     <BiLogOut />
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section 2 (Navigation Links) */}
      {!isMobileDropdownOpen && (
        <div className="w-full justify-center h-[55px] bg-white hidden lg:flex">
          <div className="items-center justify-between hidden lg:flex space-x-6 w-full max-w-[1280px]">
            <Link to="/dashboard">
              <a
                className={`${NavLinkStyle} ${
                  currentURL.includes("dashboard")
                    ? "text-[#f7931e]"
                    : "text-gray-700"
                }`}
              >
                <LuLayoutDashboard /> Dashboard
              </a>
            </Link>
            <Link to="/calendar">
              <a
                className={`${NavLinkStyle} ${
                  currentURL.includes("calendar")
                    ? "text-[#f7931e]"
                    : "text-gray-700"
                }`}
              >
                <BsCalendar3 />
                Calendar
              </a>
            </Link>
            <Link to="/activity">
              <a
                className={`${NavLinkStyle} ${
                  currentURL.includes("activity")
                    ? "text-[#f7931e]"
                    : "text-gray-700"
                }`}
              >
                <LuActivitySquare />
                Activity
              </a>
            </Link>
            <Link to="/link-accounts">
              <a
                className={`${NavLinkStyle} ${
                  currentURL.includes("link-accounts")
                    ? "text-[#f7931e]"
                    : "text-gray-700"
                }`}
              >
                <ImLink /> Link Accounts
              </a>
            </Link>
            <Link to="/invite-friends">
              <a
                className={`${NavLinkStyle} ${
                  currentURL.includes("invite-friends")
                    ? "text-[#f7931e]"
                    : "text-gray-700"
                }`}
              >
                <BiGift /> Invite Friends
              </a>
            </Link>
            <Link to="/support">
              <a
                className={`${NavLinkStyle} ${
                  currentURL.includes("support")
                    ? "text-[#f7931e]"
                    : "text-gray-700"
                }`}
              >
                <RiCustomerService2Fill />
                Contact Support
              </a>
            </Link>
            <Link to="/make-payment">
              <a
                className={`${NavLinkStyle} ${
                  currentURL.includes("make-payment")
                    ? "text-[#f7931e]"
                    : "text-gray-700"
                }`}
              >
                <BsCreditCard2Front /> Make Payment
              </a>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Navigation Dropdown */}
      {isMobileDropdownOpen && (
        <div className="lg:hidden mt-2 w-full bg-white flex flex-col gap-2 py-5 px-4">
          <Link
            to="/dashboard"
            onClick={() => {
              toggleMobileDropdown();
            }}
          >
            <a
              className={`${NavLinkStyle} ${
                currentURL.includes("dashboard")
                  ? "text-[#f7931e]"
                  : "text-gray-700"
              }`}
            >
              <LuLayoutDashboard /> Dashboard
            </a>
          </Link>
          <Link
            to="/calendar"
            onClick={() => {
              toggleMobileDropdown();
            }}
          >
            <a
              className={`${NavLinkStyle} ${
                currentURL.includes("calendar")
                  ? "text-[#f7931e]"
                  : "text-gray-700"
              }`}
            >
              <BsCalendar3 />
              Calendar
            </a>
          </Link>
          <Link
            to="/activity"
            onClick={() => {
              toggleMobileDropdown();
            }}
          >
            <a
              className={`${NavLinkStyle} ${
                currentURL.includes("activity")
                  ? "text-[#f7931e]"
                  : "text-gray-700"
              }`}
            >
              <LuActivitySquare />
              Activity
            </a>
          </Link>
          <Link
            to="/link-accounts"
            onClick={() => {
              toggleMobileDropdown();
            }}
          >
            <a
              className={`${NavLinkStyle} ${
                currentURL.includes("link-accounts")
                  ? "text-[#f7931e]"
                  : "text-gray-700"
              }`}
            >
              <ImLink /> Link Accounts
            </a>
          </Link>
          <Link
            to="/invite-friends"
            onClick={() => {
              toggleMobileDropdown();
            }}
          >
            <a
              className={`${NavLinkStyle} ${
                currentURL.includes("invite-friends")
                  ? "text-[#f7931e]"
                  : "text-gray-700"
              }`}
            >
              <BiGift /> Invite Friends
            </a>
          </Link>
          <Link
            to="/support"
            onClick={() => {
              toggleMobileDropdown();
            }}
          >
            <a
              className={`${NavLinkStyle} ${
                currentURL.includes("support")
                  ? "text-[#f7931e]"
                  : "text-gray-700"
              }`}
            >
              <RiCustomerService2Fill />
              Contact Support
            </a>
          </Link>
          <Link
            to="/make-payment"
            onClick={() => {
              toggleMobileDropdown();
            }}
          >
            <a
              className={`${NavLinkStyle} ${
                currentURL.includes("make-payment")
                  ? "text-[#f7931e]"
                  : "text-gray-700"
              }`}
            >
              <BsCreditCard2Front /> Make Payment
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
