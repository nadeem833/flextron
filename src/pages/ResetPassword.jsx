import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password should be of minimum 8 characters length"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .min(8, "Password should be of minimum 8 characters length"),
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    if (values.password !== values.confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError(null);
      console.log("call api");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const [passwordError, setPasswordError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [apiSuccess, setApiSuccess] = useState(null);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    if (passwordError !== null) {
      if (formik.values.confirmPassword === formik.values.password) {
        setPasswordError(null);
      }
    }
    // eslint-disable-next-line
  }, [formik.values]);

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-3">
        <div className="relative w-full max-w-[450px]">
          <img
            className="object-cover w-full h-28"
            src="https://img.freepik.com/free-psd/3d-character-young-man-with-business-concept_1150-64049.jpg?w=2000&t=st=1695475056~exp=1695475656~hmac=7d21c4d62e52c4683dac4ce1cc8a55d3f36d7af45f8493838474246ccca3f9fe"
            alt="image"
          />
          <div className="bg-gray-200 top-[75%] bg-transparent left-8 absolute">
            <img
              className="object-contain w-[72px] h-[72px] rounded-full"
              src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?size=626&ext=jpg&ga=GA1.1.1764889591.1695032775&semt=sph"
              alt="avatar"
            />
          </div>
        </div>

        <div className="bg-white p-4 md:p-8 shadow-md w-full max-w-[450px]">
          {apiSuccess === null && (
            <form onSubmit={formik.handleSubmit}>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-700 mb-2 mt-[40px] "
              >
                Password
              </label>

              <div
                className={` ${
                  !(formik.touched.password && formik.errors.password)
                    ? "mb-4"
                    : ""
                } border-gray-300 border rounded-md flex items-center h-9`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter an password"
                  className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 focus:outline-none "
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="h-full flex items-center px-3 text-xs font-normal leading-5 text-gray-700 text-center whitespace-nowrap bg-gray-200 border rounded-tr-md rounded-br-md"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-600 text-xs mb-2 font-semibold py-2">
                  {formik.errors.password}
                </div>
              )}

              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <div
                className={` ${
                  !(
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  )
                    ? "mb-6"
                    : ""
                } border-gray-300 border rounded-md flex items-center h-9`}
              >
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Enter confirmPassword"
                  className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 text-xs::placeholder focus:outline-none "
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                />
                <span
                  onClick={toggleConfirmPasswordVisibility}
                  className="h-full flex items-center px-3 text-xs font-normal leading-5 text-gray-700 text-center whitespace-nowrap bg-gray-200 border rounded-tr-md rounded-br-md"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-red-600 text-xs mb-6 font-semibold py-2">
                    {formik.errors.confirmPassword}
                  </div>
                )}

              {passwordError !== null && (
                <div className="text-red-600 text-xs mt-6 font-semibold py-2">
                  {passwordError}
                </div>
              )}

              <button
                type="submit"
                className="font-normal leading-6 rounded-md text-sm h-9 w-full text-white
          bg-[#485ec4]  hover:bg-[#4458b8] focus:outline-none focus:bg-blue-500"
              >
                Change Password
              </button>
            </form>
          )}

          {apiSuccess === "true" && (
            <div className="flex flex-col items-center justify-center mt-[40px]">
              <p className="text-center text-md font-semibold">
                Your password has been changed successfully.
              </p>
              <p className="mb-4 text-center text-sm ">
                You can now use your new password to log in.
              </p>
              <button
                onClick={() => {
                  navigate("/sign-in");
                }}
                className="font-normal leading-6 rounded-md text-sm h-9 w-full text-white
            bg-[#485ec4]  hover:bg-[#4458b8] focus:outline-none focus:bg-blue-500"
              >
                Go to login
              </button>
            </div>
          )}

          {apiSuccess === "false" && (
            <div className="flex flex-col items-center justify-center mt-[40px]">
              <p className="text-center text-md font-semibold">
                Oops! Something went wrong.
              </p>
              <p className="mb-4 text-center text-sm ">
                We apologize for the inconvenience. Please try again later.
              </p>
              <button
                onClick={() => {
                  navigate("/sign-in");
                }}
                className="font-normal leading-6 rounded-md text-sm h-9 w-full text-white
            bg-[#485ec4]  hover:bg-[#4458b8] focus:outline-none focus:bg-blue-500"
              >
                Go to login
              </button>
            </div>
          )}
        </div>

        {apiSuccess === null && (
          <div className="flex gap-1 justify-center items-center w-full mt-5 text-sm font-normal leading-5 text-gray-700 text-center">
            Remember it ?{" "}
            <span
              onClick={() => {
                navigate("/sign-in");
              }}
              className="text-blue-500 font-medium cursor-pointer"
            >
              Sign In here
            </span>
          </div>
        )}

        <div className="flex gap-1 justify-center items-center w-full mt-4 text-sm font-normal leading-5 text-gray-700 text-center">
          Copyright © 2023 FlexTron. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
