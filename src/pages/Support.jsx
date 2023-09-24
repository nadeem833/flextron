import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { publicRequest } from "../requestMethods";

export const Support = () => {
  const validationSchema = Yup.object({
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    subject: "",
    message: "",
  };

  const handleSubmit = async (values) => {
    await publicRequest
      .post(`/contact`, values)
      .then((res) => {
        console.log(res)
        toast.success("Ticket created successful!");
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

  return (
    <div className="w-full max-w-[1280px] h-full">
      <div className="h-[75px] flex justify-between items-center px-5 lg:px-0">
        <p className="uppercase font-semibold text-base text-gray-700">
          Create Ticket
        </p>
        <p className="text-sm font-normal leading-6 text-gray-700">
          Flextron <span className="text-[#74788d]"> / Contact Support</span>
        </p>
      </div>

      <div className="bg-white rounded-sm ">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white rounded-sm p-5 flex flex-col gap-1"
        >
          <label
            htmlFor="subject"
            className="block text-sm font-medium leading-6 text-gray-700 mb-2 "
          >
            Subject
          </label>
          <div
            className={` ${
              !(formik.touched.subject && formik.errors.subject) ? "mb-4" : ""
            } border-gray-300 border rounded-md flex items-center h-9`}
          >
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 focus:outline-none "
              placeholder="Enter Subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
          </div>
          {formik.touched.subject && formik.errors.subject && (
            <div className="text-red-600 text-xs mb-2 font-semibold py-2">
              {formik.errors.subject}
            </div>
          )}

          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6 text-gray-700 mb-2"
          >
            Message
          </label>
          <div
            className={` ${
              !(formik.touched.message && formik.errors.message) ? "mb-4" : ""
            } border-gray-300 border rounded-md flex items-center`}
          >
            <textarea
              name="message"
              id="message"
              className="w-full rounded-md px-2 py-1 text-xs font-normal leading-6 text-gray-700 placeholder-gray-400 focus:outline-none "
              placeholder="Enter message"
              rows="8"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
          </div>
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-600 text-xs mb-2 font-semibold py-2">
              {formik.errors.message}
            </div>
          )}
          <button
            type="submit"
            className="font-normal leading-6 rounded-md text-sm h-9 w-full text-white bg-[#485ec4]  hover:bg-[#4458b8] focus:outline-none focus:bg-blue-500"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
