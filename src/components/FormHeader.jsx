import React from "react";

const FormHeader = ({ title, subTitle }) => {
  return (
    <div className="w-full h-28 bg-orange-200 p-6 flex justify-between rounded-tl-md rounded-tr-md">
      <div className="w-[60%]">
        <p className="text-base font-medium leading-5 text-black mb-2">
          {title}
        </p>
        <p className="text-sm font-normal leading-6 text-black mb-4">
          {subTitle}
        </p>
      </div>
      <div className="w-[40%] flex items-center">
        <img
          className="w-full h-24"
          src="/FormHeaderImage.png"
          alt="delivery truck"
        />
      </div>
    </div>
  );
};

export default FormHeader;
