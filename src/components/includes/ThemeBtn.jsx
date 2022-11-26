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
      className=" p-3 border-0 md:border-2 rounded-full border-utility-outline dark:border-utility-outline-dark "
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6 text-on-surface-variant-dark" />
      ) : (
        <MoonIcon className="h-6 w-6 text-on-surface-variant" />
      )}
    </button>
  );
}

export default ThemeBtn