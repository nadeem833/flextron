import React from "react";

const PendingInvitesTable = ({ dataArray }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-sm">
            <table className="min-w-full border text-center text-sm font-light ">
              <thead className="border-b font-medium ">
                <tr>
                  <th scope="col" className="border-r px-6 py-4 text-left">
                    Email
                  </th>
                  <th scope="col" className="border-r px-6 py-4 text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataArray.map((item, index) => (
                  <tr key={index} className="border-b ">
                    <td className="whitespace-nowrap border-r px-6 py-4 text-left">
                      {item.email}
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 text-left">
                      <div
                        className={`bg-orange-200 py-1 px-2 text-xs font-semibold w-min rounded-md`}
                      >
                        {item.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingInvitesTable;
