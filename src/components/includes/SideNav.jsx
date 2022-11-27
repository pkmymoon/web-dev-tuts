import React, { useState } from "react";
import MenuBtn from "./MenuBtn";
import ThemeBtn from "./ThemeBtn";

function SideNav() {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <div className=" w-20 h-screen sticky top-0">
      {/* Header */}
      <header className="flex flex-row md:flex-col items-center justify-between w-full md:w-auto h-auto md:h-screen">
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="md:absolute z-10 top-0 left-0"
        >
          <MenuBtn menuStat={navOpen} />
        </div>
        <div>
          <ThemeBtn />
        </div>
      </header>
    </div>
  );
}

export default SideNav;
