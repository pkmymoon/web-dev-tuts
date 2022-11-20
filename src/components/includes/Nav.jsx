import React, { useEffect, useState } from "react";
import { ReactComponent as Html } from "../../assets/icons/html.svg";
import { ReactComponent as Css } from "../../assets/icons/css.svg";
import { ReactComponent as Js } from "../../assets/icons/js.svg";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function Nav() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="flex flex-col items-center sticky top-0 justify-between w-28 h-screen bg-surface02-light dark:bg-surface02-dark transition-all ease-out duration-300">
        <ul>
          <li className="relative mt-7 cursor-pointer group opacity-70 hover:opacity-100">
            <div className="w-14 mx-auto flex items-center justify-center h-8 rounded-full group-hover:bg-surface05-light dark:active:bg-secondaryContainer_dark dark:group-hover:bg-surface05-dark transition-all ease-out duration-300">
              <Html className="w-4 fill-onSecondaryContainer_light dark:fill-onSecondaryContainer_dark " />
            </div>
            <p
              className="mt-1 text-center font-medium 
            text-onBgContainer_light dark:text-onBgContainer_dark transition-all ease-out duration-300"
            >
              HTML
            </p>
          </li>
          <li className="mt-7 cursor-pointer group opacity-70 hover:opacity-100">
            <div className="w-14 mx-auto flex items-center justify-center h-8 rounded-full group-hover:bg-surface05-light dark:active:bg-secondaryContainer_dark dark:group-hover:bg-surface05-dark transition-all ease-out duration-300">
              <Css className="w-4 fill-onSecondaryContainer_light dark:fill-onSecondaryContainer_dark" />
            </div>
            <p className="mt-1 text-center font-medium text-onBgContainer_light dark:text-onBgContainer_dark transition-all ease-out duration-300">
              CSS
            </p>
          </li>
          <li className="mt-7 cursor-pointer group opacity-70 hover:opacity-100">
            <div className="w-14 mx-auto flex items-center justify-center h-8 rounded-full group-hover:bg-surface05-light dark:active:bg-secondaryContainer_dark dark:group-hover:bg-surface05-dark transition-all ease-out duration-300">
              <Js className="w-4 fill-onSecondaryContainer_light dark:fill-onSecondaryContainer_dark" />
            </div>
            <p className="mt-1 text-center font-medium text-onBgContainer_light dark:text-onBgContainer_dark transition-all ease-out duration-300">
              JavaScript
            </p>
          </li>
        </ul>
        <button
          type="button"
          onClick={switchTheme}
          className="mb-7 p-3  border-2 rounded-full border-bg_dark dark:border-bg_light "
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6 text-bg_light" />
          ) : (
            <MoonIcon className="h-6 w-6 text-bg_dark" />
          )}
        </button>
      </div>
    </>
  );
}

export default Nav;
