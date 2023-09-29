import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../styles";
import { FaEnvelope } from "react-icons/fa";
const InviteModal = ({ isOpen, closeModal }) => {
  
    const commonButtonStyles = 'font-light leading-6 text-sm h-9 w-full text-black'
  
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

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-1000"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md mx-4 md:mx-0 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-between text-lg font-medium leading-6 text-gray-900 "
                  >
                    Invite Friend
                    <RiCloseLine
                      onClick={closeModal}
                      className="cursor-pointer"
                    />
                  </Dialog.Title>

                  <div className="mt-2">
                    <form
                      onSubmit={formik.handleSubmit}
                      className="bg-white rounded-sm flex flex-col gap-1"
                    >
                      <label
                        htmlFor="email"
                        className={`${styles.formLabel} mt-4`}
                      >
                        Email
                      </label>
                      <div
                        className={`${styles.formFieldBox} ${
                          !(formik.touched.email && formik.errors.email) &&
                          "mb-4"
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
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                        />
                      </div>
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-red-600 text-xs mb-2 font-semibold py-2">
                          {formik.errors.email}
                        </div>
                      )}

                      <div className="flex relative">
                        <button
                          type="submit"
                          className={`${commonButtonStyles} rounded-s-md bg-orange-200 mb-4 hover:bg-orange-300 cursor-pointer focus:outline-none`}
                        >
                          Invite
                        </button>
                        <div
                          onClick={closeModal}
                          className={`${commonButtonStyles} flex justify-center items-center rounded-e-md bg-gray-300 mb-4 hover:bg-gray-400 cursor-pointer focus:outline-none`}
                        >
                          Close
                        </div>

                        <div className="rounded-full h-7 w-h-7 border text-[10px] flex items-center justify-center py-1 px-[6px] bg-gray-400 fixed mt-1 z-11 left-[47%]">
                          OR
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default InviteModal;
