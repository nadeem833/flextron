import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { privateRequest, publicRequest } from "../requestMethods";
import styles from "../styles";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export const LinkAccounts = () => {
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
    // await publicRequest
    //   .post(`login`, values, { withCredentials: true })
    //   .then((res) => {
    //     toast.success("Sign In Successful!");
    //     navigate("/dashboard");
    //   })
    //   .catch((error) => {
    //     toast.error(error.response.data.message);
    //   });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const userEmail = useSelector((state) => state.auth.userDetails.email)
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-[1280px] h-full px-5 lg:px-0">
      <div className="h-[75px] flex justify-between items-center ">
        <p className={`${styles.pageTitle}`}>Connected Accounts </p>
        <p className={`${styles.breadCrumbTitle}`}>
          Flextron{" "}
          <span className={`${styles.breadCrumbSubtitle}`}>
            {" "}
            / Connected Accounts{" "}
          </span>
        </p>
      </div>

      <div className="w-full h-24 bg-white mb-10 rounded-md flex items-center px-4">
        <div className="bg-blue-50 border border-blue-200 text-[#306391] rounded-md w-full px-4 flex items-center text-xs h-12 gap-2">
          <BsFillInfoCircleFill /> You are currently logged in as
          {" "}
          {userEmail}
        </div>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="bg-white rounded-md p-5 flex flex-col gap-1"
      >

        <p className="text-base font-semibold mb-2 text-gray-600">Connect New Account</p>

        <label htmlFor="email" className={`${styles.formLabel}`}>
          Email
        </label>
        <div
          className={`${styles.formFieldBox} ${
            !(formik.touched.email && formik.errors.email) && "mb-4"
          }`}
        >
          <span className={`${styles.formFieldSpan}`}>
            <FaEnvelope />
          </span>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Amazon Flex Email"
            className={`${styles.formInput}`}
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

        <label htmlFor="password" className={`${styles.formLabel}`}>
          Password
        </label>
        <div
          className={` ${
            !(formik.touched.password && formik.errors.password) && "mb-6"
          } ${styles.formFieldBox}`}
        >
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter Password"
            className={`${styles.formInput} rounded-s-md`}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
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

        <button type="submit" className={`${styles.submitButton}`}>
          Connect
        </button>

      </form>
    </div>
  );
};
