import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import FormHeader from "../components/FormHeader";
import { publicRequest } from "../requestMethods";
import styles from "../styles";

export const ChangePassword = () => {
  const { id } = useParams();

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string().required("New password is required"),
    confirmPassword: Yup.string().required("Confirm password is required"),
  });

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values) => {
    // if (values.password !== values.confirmPassword) {
    //   setPasswordError("Passwords do not match");
    // } else {
    //   setPasswordError(null);
    //   let apiObject = {
    //     password : values.password
    //   }
    //   await publicRequest
    //   .post(`reset-password?token=${id}`, apiObject)
    //   .then((res) => {
    //     setApiSuccess("true");
    //   })
    //   .catch((error) => {
    //     setApiSuccess("false");
    //   });
    // }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const [passwordError, setPasswordError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  console.log(id);

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
      <div className="w-full max-w-[1280px] h-full px-5 lg:px-0">
        <div className="h-[75px] flex justify-between items-center ">
          <p className={`${styles.pageTitle}`}>Change Password </p>
          <p className={`${styles.breadCrumbTitle}`}>
            Flextron{" "}
            <span className={`${styles.breadCrumbSubtitle}`}>
              {" "}
              / Change Password{" "}
            </span>
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="bg-white rounded-md p-5 flex flex-col gap-1"
        >
          <label htmlFor="currentPassword" className={`${styles.formLabel}`}>
            Current Password
          </label>
          <div
            className={`${styles.formFieldBox} ${
              !(
                formik.touched.currentPassword && formik.errors.currentPassword
              ) && "mb-4"
            }`}
          >
            <input
              type={showCurrentPassword ? "text" : "password"}
              id="currentPassword"
              name="currentPassword"
              placeholder="Enter currentPassword"
              className={`${styles.formInput} rounded-s-md`}
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.currentPassword &&
                Boolean(formik.errors.currentPassword)
              }
            />
            <span
              onClick={toggleCurrentPasswordVisibility}
              className="h-full flex items-center px-3 text-xs font-normal leading-5 text-gray-700 text-center whitespace-nowrap bg-gray-200 border rounded-tr-md rounded-br-md"
            >
              {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {formik.touched.currentPassword && formik.errors.currentPassword && (
            <div className="text-red-600 text-xs mb-2 font-semibold py-2">
              {formik.errors.currentPassword}
            </div>
          )}

          <label htmlFor="newPassword" className={`${styles.formLabel}`}>
            New Password
          </label>
          <div
            className={` ${
              !(formik.touched.newPassword && formik.errors.newPassword) &&
              "mb-4"
            } ${styles.formFieldBox}`}
          >
            <input
              type={showPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              placeholder="Enter newPassword"
              className={`${styles.formInput} rounded-s-md`}
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.newPassword && Boolean(formik.errors.newPassword)
              }
            />
            <span
              onClick={togglePasswordVisibility}
              className="h-full flex items-center px-3 text-xs font-normal leading-5 text-gray-700 text-center whitespace-nowrap bg-gray-200 border rounded-tr-md rounded-br-md"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {formik.touched.newPassword && formik.errors.newPassword && (
            <div className="text-red-600 text-xs mb-4 font-semibold py-2">
              {formik.errors.newPassword}
            </div>
          )}

          <label htmlFor="confirmPassword" className={`${styles.formLabel}`}>
            New Password
          </label>
          <div
            className={` ${
              !(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              ) && "mb-6"
            } ${styles.formFieldBox}`}
          >
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Enter Confirm Password"
              className={`${styles.formInput} rounded-s-md`}
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
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-600 text-xs mb-6 font-semibold py-2">
              {formik.errors.confirmPassword}
            </div>
          )}

          <button type="submit" className={`${styles.submitButton}`}>
            Change Password
          </button>
        </form>
      </div>
    </>
  );
};
