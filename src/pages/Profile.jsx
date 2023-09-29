import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { privateRequest, publicRequest } from "../requestMethods";
import styles from "../styles";
import { FaEnvelope } from "react-icons/fa";

export const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const avatarImage = "https://ionicframework.com/docs/img/demos/avatar.svg";

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.number()
      .required("Phone number is required")
      .typeError("Invalid phone number"),
  });

  const initialValues = {
    email: "dummy_email@yopmail.com",
    phone: "",
  };

  const handleSubmit = async (values) => {
    // await privateRequest
    //   .post(`/contact`, values)
    //   .then((res) => {
    //     console.log(res);
    //     toast.success("Ticket created successful!");
    //   })
    //   .catch((error) => {
    //     toast.error(error.response.data.message);
    //   });
  };

  console.log(selectedImage)
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="w-full max-w-[1280px] h-full px-5 lg:px-0">
      <div className="h-[75px] flex justify-between items-center ">
        <p className={`${styles.pageTitle}`}>Profile</p>
        <p className={`${styles.breadCrumbTitle}`}>
          Flextron{" "}
          <span className={`${styles.breadCrumbSubtitle}`}> / Profile</span>
        </p>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="bg-white rounded-md p-5 flex flex-col gap-1"
      >
        <div class="w-[150px] h-[150px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mb-3">
          <img
            src={
              selectedImage === null
                ? `${avatarImage}`
                : `${URL.createObjectURL(selectedImage)}`
            }
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <input
          accept="image/*"
          id="image"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => {
            setSelectedImage(e.target.files[0]);
          }}
        />
        <label htmlFor="image">
          <div className={`${styles.formFieldBox} mb-2`}>
            <span className={`${styles.formFieldSpan} cursor-pointer`}>Browse...</span>
            <p
              className={`w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-${
                selectedImage === null ? "400" : "700"
              }`}
            >
              {selectedImage === null ? 'No file selected.' : selectedImage.name}
            </p>
          </div>
        </label>

        <label
          htmlFor="email"
          className={`${styles.formLabel}`}
        >
          Email
        </label>

        <div className={`${styles.formFieldBox}`}>
          <span className={`${styles.formFieldSpan}`}>
            <FaEnvelope />
          </span>
          <input
            type="text"
            id="email"
            name="email"
            disabled
            placeholder="Amazon Flex Email"
            className={`${styles.formInput} bg-[#eff2f7] cursor-not-allowed`}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
        </div>

        <label htmlFor="message" className={`${styles.formLabel} mt-2`}>
          Phone
        </label>
        <div
          className={` ${
            !(formik.touched.phone && formik.errors.phone) ? "mb-6" : ""
          } ${styles.formFieldBox}`}
        >
          <span className={`${styles.formFieldSpan}`}>+1</span>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Amazon Flex Phone"
            className={`${styles.formInput}`}
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
        <button type="submit" className={`${styles.submitButton}`}>
          Update Profile
        </button>
      </form>
    </div>
  );
};
