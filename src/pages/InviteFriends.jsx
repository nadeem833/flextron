import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { privateRequest, publicRequest } from "../requestMethods";
import styles from "../styles";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import InviteModal from "../components/InviteModal";
import PendingInvitesTable from "../components/PendingInvitesTable";

export const InviteFriends = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const dummyData = [
    {
      email: "example1@example.com",
      status: "Send",
    },
    {
      email: "example2@example.com",
      status: "Send",
    },
    {
      email: "example3@example.com",
      status: "Send",
    },
    // Add more data objects as needed
  ];

  return (
    <div className="w-full max-w-[1280px] h-full px-5 lg:px-0">
      <div className="h-[75px] flex justify-between items-center ">
        <p className={`${styles.pageTitle}`}>Invitations </p>
        <p className={`${styles.breadCrumbTitle}`}>
          Flextron{" "}
          <span className={`${styles.breadCrumbSubtitle}`}>
            {" "}
            / Invitations{" "}
          </span>
        </p>
      </div>

      <div className="w-full h-24 bg-white mb-10 rounded-md flex items-center px-4">
        <div
          onClick={openModal}
          className={`${styles.submitButton} flex items-center justify-center mb-0`}
        >
          Invite
        </div>
      </div>

      {isOpen && <InviteModal isOpen={isOpen} closeModal={closeModal} />}

      <div className="bg-white rounded-md p-5 flex flex-col gap-1">
        <div>
          <p className="text-base font-semibold mb-2 text-gray-600">
            Pending Invites
          </p>
          <PendingInvitesTable dataArray={dummyData} />
        </div>
      </div>
      <div></div>
      <div className="bg-white rounded-md p-5 flex flex-col gap-1 my-10">

          <p className="text-base font-semibold mb-2 text-gray-600">
            Paid Invites
          </p>
          <PendingInvitesTable dataArray={dummyData} />
         </div>
    </div>
  );
};
