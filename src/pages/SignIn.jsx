import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { toast } from "react-toastify";
import FormHeader from "../components/FormHeader";

const SignIn = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    await publicRequest
      .post(`login`, values, { withCredentials: true })
      .then((res) => {
        toast.success("Sign In Successful!");
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-3">
        <div className="relative w-full max-w-[450px]">
          <FormHeader
            title={"Welcome Back !"}
            subTitle={"Sign in to continue to Flextron."}
          />
          <div className="bg-gray-200 top-[75%] bg-transparent left-8 absolute">
            <img
              className="object-contain w-[72px] h-[72px] rounded-full border border-orange-300 bg-white"
              src="/SmallLogo.png"
              alt="avatar"
            />
          </div>
        </div>

        <div className="bg-white p-4 md:p-8 shadow-md w-full max-w-[450px]">
          <form onSubmit={formik.handleSubmit}>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-700 mb-2 mt-[40px] "
            >
              Email
            </label>

            <div
              className={` ${
                !(formik.touched.email && formik.errors.email) ? "mb-4" : ""
              } border-gray-300 border rounded-md flex items-center h-9`}
            >
              <span className="h-full flex items-center py-1 px-3 text-sm font-normal leading-5 text-gray-700 text-center whitespace-nowrap bg-gray-200 border rounded-tl-md rounded-bl-md">
                <FaEnvelope />
              </span>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 focus:outline-none "
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600 text-xs mb-2 font-semibold py-2">
                {formik.errors.email}
              </div>
            )}

            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-700 mb-2"
            >
              Password
            </label>
            <div
              className={` ${
                !(formik.touched.password && formik.errors.password)
                  ? "mb-6"
                  : ""
              } border-gray-300 border rounded-md flex items-center h-9`}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter Password"
                className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 text-xs::placeholder focus:outline-none "
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
              <div className="text-red-600 text-xs mb-6 font-semibold py-2">
                {formik.errors.password}
              </div>
            )}

            <button
              type="submit"
              className="font-normal leading-6 rounded-md text-sm h-9 w-full text-black
          bg-[#f7931e]  hover:bg-orange-400 focus:outline-none focus:bg-orange-500"
            >
              Login
            </button>
          </form>

          <div
            onClick={() => {
              navigate("/forgot-password");
            }}
            className="flex gap-3 justify-center items-center w-full cursor-pointer mt-4 text-sm font-normal leading-5 text-gray-500 text-center"
          >
            <FaLock />
            Forgot your password
          </div>
        </div>

        <div className="flex gap-1 justify-center items-center w-full mt-5 text-sm font-normal leading-5 text-gray-700 text-center">
          Don't have an account ?{" "}
          <span
            onClick={() => {
              navigate("/sign-up");
            }}
            className="text-[#f7931e] font-medium cursor-pointer"
          >
            Signup now
          </span>
        </div>

        <div className="flex gap-1 justify-center items-center w-full mt-4 text-sm font-normal leading-5 text-gray-700 text-center">
          Copyright © 2023 FlexTron. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default SignIn;
