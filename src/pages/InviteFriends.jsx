import { useEffect, useState } from "react";

import styles from "../styles";
import InviteModal from "../components/InviteModal";
import PendingInvitesTable from "../components/PendingInvitesTable";
import { privateRequest } from "../requestMethods";
import { toast } from "react-toastify";

export const InviteFriends = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [paidInvitations, setPaidInvitations] = useState([]);
  const [pendingInvitations, setPendingInvitations] = useState([]);


  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const getInvitations = async () => {
    console.log('running')
    await privateRequest
      .get(`invitation-status`)
      .then((res) => {
        let paidArray = res.data.filter((value)=>( value.invitation_status === 'accepted'))
        let pendingArray = res.data.filter((value)=>( value.invitation_status === 'send'))
        setPaidInvitations(paidArray)
        setPendingInvitations(pendingArray)
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
      });
  };

  useEffect(() => {
    if(isOpen === false){
      getInvitations()
    }
  }, [isOpen])
  

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
          <PendingInvitesTable dataArray={pendingInvitations} />
        </div>
      </div>
      <div></div>
      <div className="bg-white rounded-md p-5 flex flex-col gap-1 my-10">

          <p className="text-base font-semibold mb-2 text-gray-600">
            Paid Invites
          </p>
          <PendingInvitesTable dataArray={paidInvitations} />
         </div>
    </div>
  );
};
