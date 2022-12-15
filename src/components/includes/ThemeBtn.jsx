import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

function ThemeBtn() {
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
    <button
      type="button"
      onClick={switchTheme}
      className="flex gap-2 mt-0 lg:mt-5 p-3 items-center border-none lg:border rounded-full border-on-surface-variant dark:border-on-surface-variant-dark"
    >
      {theme === "dark" ? (
        <>
          <SunIcon className="h-6 w-6 text-on-surface-variant-dark" />
          <span className="hidden lg:block text-xs text-on-surface-variant-dark">
            Switch to light mode
          </span>
        </>
      ) : (
        <>
          <MoonIcon className="h-6 w-6 text-on-surface-variant" />
          <span className="hidden lg:block text-xs text-on-surface-variant">
            Switch to dark mode
          </span>
        </>
      )}
    </button>
  );
}

export default ThemeBtn