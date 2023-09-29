import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { privateRequest, publicRequest } from "../requestMethods";
import styles from "../styles";

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
    await privateRequest
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
    <div className="w-full max-w-[1280px] h-full px-5 lg:px-0">
      <div className="h-[75px] flex justify-between items-center ">
      <p className={`${styles.pageTitle}`}>
          Create Ticket
        </p>
        <p className={`${styles.breadCrumbTitle}`}>
          Flextron <span className={`${styles.breadCrumbSubtitle}`}> / Contact Support</span>
        </p>
      </div>

      <div className="bg-white rounded-sm ">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white rounded-sm p-5 flex flex-col gap-1"
        >
          <label
            htmlFor="subject"
            className={`${styles.formLabel}`}
          >
            Subject
          </label>
          <div
            className={` 
            ${!(formik.touched.message && formik.errors.message) && "mb-4" }
            ${styles.formFieldBox}`}
          >
            <input
              type="text"
              id="subject"
              name="subject"
              className={`${styles.formInput} rounded-s-md`}
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
            className={`${styles.formLabel}`}
          >
            Message
          </label>
          <div
            className={` 
            ${!(formik.touched.message && formik.errors.message) && "mb-4" }
             border-gray-300 border rounded-md flex items-center`}
          >
            <textarea
              name="message"
              id="message"
              className={`${styles.formInput} rounded-s-md `}
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
            className={`${styles.submitButton}`}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
