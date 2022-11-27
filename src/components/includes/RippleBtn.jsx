import React, { useState } from 'react'

function RippleBtn({label}) {
    const [clicked, setClicked] = useState(false);

    
    return (
      <button
        onClick={() => setClicked(!clicked)}
        className={`${
          clicked ? "rounded-2xl" : "rounded-[48px]"
        } relative w-full py-5 px-10 transition-all z-10 duration-100 ease-out bg-primary dark:bg-primary-dark cursor-pointer overflow-hidden`}
      >
        <div
          className={`${
            clicked
              ? "opacity-50 scale-100 rounded-2xl"
              : "opacity-0 scale-0 rounded-[48px]"
          } -z-10 transform blur-sm origin-center left-0 top-0 bottom-0 right-0 absolute duration-100 transition-all ease-out  bg-black dark:bg-white`}
        ></div>
        <span className=" text-on-primary dark:text-on-primary-dark text-xl font-medium">
          {label}
        </span>
      </button>
    );
}

export default RippleBtn