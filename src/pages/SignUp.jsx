import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { toast } from "react-toastify";
import FormHeader from "../components/FormHeader";
import styles from "../styles";

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    // name: Yup.string().required("Name is required"),
    phone: Yup.number()
      .required("Phone number is required")
      .typeError("Invalid phone number"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    // name: "",
    email: "",
    password: "",
    phone: "",
  };

  const handleSubmit = async (values) => {
    await publicRequest
      .post(`sign-up`, values)
      .then((res) => {
        toast.success("Sign Up Successful!");
        navigate("/sign-in");
      })
      .catch((error) => {
        toast.error("Error signing up");
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-3">
        <div className="relative w-full max-w-[450px]">
          <FormHeader
            title={"Register"}
            subTitle={"Get your Flextron Account Now 3 DAY FREE TRIAL"}
          />
          <div className="bg-gray-200 top-[75%] bg-transparent left-8 absolute">
            <img
              className="object-contain w-[72px] h-[72px] rounded-full border border-orange-300 bg-white"
              src="/SmallLogo.png"
              alt="avatar"
            />
          </div>
        </div>

        <div className="bg-white p-4 md:p-8 shadow-md w-full max-w-[450px] rounded-bl-md rounded-br-md">
          <form onSubmit={formik.handleSubmit}>
            {/*
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-700 mb-2 mt-[40px] "
            >
              Name
            </label>

             <div
              className={` ${
                !(formik.touched.name && formik.errors.name) ? "mb-4" : ""
              } border-gray-300 border rounded-md flex items-center h-9`}
            >
              <span className="h-full flex items-center py-1 px-3 text-sm font-normal leading-5 text-gray-700 text-center whitespace-nowrap bg-gray-200 border rounded-tl-md rounded-bl-md">
                <BsFillPersonFill />
              </span>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter an name"
                className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 focus:outline-none "
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-600 text-xs mb-2 font-semibold py-2">
                {formik.errors.name}
              </div>
            )} */}

            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-700 mb-2 mt-[40px]"
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
                placeholder="Amazon Flex Email"
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
                  ? "mb-4"
                  : ""
              } border-gray-300 border rounded-md flex items-center h-9`}
            >
              <span className="h-full flex items-center py-1 px-3 text-sm font-normal leading-5 text-gray-700 text-center whitespace-nowrap bg-gray-200 border rounded-tl-md rounded-bl-md">
                <FaLock />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Amazon Flex Password"
                className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 text-xs::placeholder focus:outline-none "
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-600 text-xs mb-2 font-semibold py-2">
                {formik.errors.password}
              </div>
            )}

            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-700 mb-2"
            >
              Phone
            </label>
            <div
              className={` ${
                !(formik.touched.phone && formik.errors.phone) ? "mb-6" : ""
              } border-gray-300 border rounded-md flex items-center h-9`}
            >
              <span className="h-full flex items-center py-1 px-3 text-sm font-normal leading-5 text-gray-700 text-center whitespace-nowrap bg-gray-200 border rounded-tl-md rounded-bl-md">
                +1
              </span>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Amazon Flex Phone"
                className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 text-xs::placeholder focus:outline-none "
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
              />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-600 text-xs mb-6 font-semibold py-2">
                {formik.errors.phone}
              </div>
            )}

            <button
              type="submit"
              className={`${styles.submitButton}`}
            >
              Register
            </button>
          </form>
        </div>

        <div className="flex gap-1 justify-center items-center w-full mt-5 text-sm font-normal leading-5 text-gray-700 text-center">
          Already have an account ?{" "}
          <span
            onClick={() => {
              navigate("/sign-in");
            }}
            className="text-[#f7931e] font-medium cursor-pointer"
          >
            Login
          </span>
        </div>

        <div className="flex gap-1 justify-center items-center w-full mt-4 text-sm font-normal leading-5 text-gray-700 text-center">
          Copyright © 2023 FlexTron. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default SignUp;
