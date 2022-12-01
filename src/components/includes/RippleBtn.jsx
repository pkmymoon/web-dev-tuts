import React from "react";

function RippleBtn({ label }) {

  return (
    <button
      className="relative w-full py-4 px-8 transition-all rounded-[48px] duration-100 ease-out bg-primary dark:bg-primary-dark cursor-pointer overflow-hidden"
    >
      <span className=" text-on-primary dark:text-on-primary-dark text-lg font-medium">
        {label}
      </span>
    </button>
  );
}

export default RippleBtn;
