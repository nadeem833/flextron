import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <section id="Contact Us" class="flex justify-center flex-col items-center w-full max-w-[1280px] mx-auto px-5 mt-20">
      <h1 className="font-SpaceGrotesk text-5xl font-normal text-left text-white mb-14">
        Contact Us
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        className=" bg-black w-full max-w-5xl"
      >
        <div className="md:flex gap-8">
          <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
            <label htmlFor="name" className="block font-bold mb-2 text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`w-full py-2 px-4 text-white text-xs h-10 border bg-[#F68C6D1A] focus:outline-none  rounded-[14px] ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-[black]"
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          <div className="lg:w-1/2 w-full">
            <label
              htmlFor="email"
              className="block font-medium mb-2 text-white"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full py-2 px-4 text-white text-xs h-10 border bg-[#F68C6D1A] focus:outline-none rounded-[14px] ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-[black]"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="message"
            className="block font-medium mb-2 text-white"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            rows="4"
            className={`w-full py-2 px-4 text-white text-xs h-10 border bg-[#F68C6D1A] focus:outline-none rounded-[14px] ${
              formik.touched.message && formik.errors.message
                ? "border-red-500"
                : "border-[black]"
            }`}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
        </div>
        <div className="w-full flex justify-center">
          <button
            type="button"
            className="text-white h-[35px] font-normal text-sm px-5 w-[300px] rounded-[30px] flex justify-center items-center bg-[#F79324] hover:bg-[#E27A00] mt-5 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
