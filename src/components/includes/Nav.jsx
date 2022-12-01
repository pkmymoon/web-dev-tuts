import { ReactComponent as Html } from "../../assets/icons/html.svg";
import { ReactComponent as Css } from "../../assets/icons/css.svg";
import { ReactComponent as Js } from "../../assets/icons/js.svg";
import { ReactComponent as Jquery } from "../../assets/icons/jquery.svg";
import { ReactComponent as Bootstrap } from "../../assets/icons/bootstrap.svg";
import { ReactComponent as Sass } from "../../assets/icons/sass.svg";
import { ReactComponent as IconReact } from "../../assets/icons/react.svg";
import { NavLink } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MenuBtn from "./MenuBtn";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="relative top-0 right-0 left-0 z-10 h-20">
        {/* Overlay */}
        {navOpen ? (
          <div
            id="overlay"
            className="fixed w-screen h-screen top-0 right-0 bottom-0 left-0 bg-background-dark opacity-80 "
          ></div>
        ) : (
          ""
        )}

        <header className="flex fixed items-center justify-between px-5 py-3  w-full  h-20 bg-surface-0 dark:bg-surface-0-dark drop-shadow-sm">
          {/* MenuBtn */}
          <div className=" relative">
            <div
              onClick={() => setNavOpen(!navOpen)}
              className=" z-10 top-0 left-0"
            >
              <MenuBtn menuStat={navOpen} />
            </div>
          </div>

          {/* Nav */}
          <h1 className=" text-xl font-bold text-on-surface-variant dark:text-on-surface-variant-dark">
            Tech Schooling
          </h1>
          <nav
            onClick={() => setNavOpen(!navOpen)}
            className={`${
              navOpen ? " translate-x-0 rounded-r-2xl " : " -translate-x-full"
            } flex flex-col items-start drop-shadow-xl fixed top-0 left-0 h-screen w-60  px-6  py-3  bg-surface-2 dark:bg-surface-2-dark transition-transform ease-in-out duration-300 overflow-y-auto`}
          >
            <div
              onClick={() => setNavOpen(!navOpen)}
              className=" flex items-center justify-center mb-4 top-0 left-0 rounded-full"
            >
              <MenuBtn menuStat={navOpen} />
            </div>
            <div className="w-full  mb-3.5 group">
              <NavLink to="web-dev-tuts/">
                {({ isActive }) => (
                  <div className="flex rounded-full  items-center gap-4 ">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10   rounded-full relative  `}
                    >
                      <div
                        className={`${
                          isActive
                            ? "opacity-100 scale-100 "
                            : "opacity-0 scale-x-50 "
                        } w-full h-full transform absolute duration-300 transition-all ease-out rounded-full bg-secondary-container dark:bg-secondary-container-dark`}
                      ></div>
                      <HomeIcon className="w-5 z-10 group-hover:scale-105 transition-all duration-200 ease-in-out fill-on-secondary-container dark:fill-on-secondary-container-dark" />
                    </div>
                    <span
                      className={`${
                        isActive ? "font-semibold" : "font-normal"
                      } text-center mt-0 md:mt-1 text-lg md:text-sm block text-on-secondary-container dark:text-on-secondary-container-dark`}
                    >
                      Home
                    </span>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="w-full  mb-3.5 group">
              <NavLink to="/html">
                {({ isActive }) => (
                  <div className="flex rounded-full  items-center gap-4 ">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10   rounded-full relative  `}
                    >
                      <div
                        className={`${
                          isActive
                            ? "opacity-100 scale-100 "
                            : "opacity-0 scale-x-50 "
                        } w-full h-full transform absolute duration-300 transition-all ease-out rounded-full bg-secondary-container dark:bg-secondary-container-dark`}
                      ></div>
                      <Html className="w-4 z-10 group-hover:scale-105 transition-all duration-200 ease-in-out fill-on-secondary-container dark:fill-on-secondary-container-dark" />
                    </div>
                    <span
                      className={`${
                        isActive ? "font-semibold" : "font-normal"
                      } text-center mt-0 md:mt-1 text-lg md:text-sm block text-on-secondary-container dark:text-on-secondary-container-dark`}
                    >
                      HTML
                    </span>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="w-full  mb-3.5 group">
              <NavLink to="/css">
                {({ isActive }) => (
                  <div className="flex  items-center  gap-4 ">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10   rounded-full relative  `}
                    >
                      <div
                        className={`${
                          isActive
                            ? "opacity-100 scale-100 "
                            : "opacity-0 scale-x-50 "
                        } w-full h-full transform absolute duration-300 transition-all ease-out rounded-full bg-secondary-container dark:bg-secondary-container-dark`}
                      ></div>
                      <Css className="w-4 z-10 group-hover:scale-105 transition-all duration-200 ease-in-out fill-on-secondary-container dark:fill-on-secondary-container-dark" />
                    </div>
                    <span
                      className={`${
                        isActive ? "font-semibold" : "font-normal"
                      } text-center mt-0 md:mt-1 text-lg md:text-sm block text-on-secondary-container dark:text-on-secondary-container-dark`}
                    >
                      CSS
                    </span>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="w-full  mb-3.5 group">
              <NavLink to="/java-script">
                {({ isActive }) => (
                  <div className="flex  items-center  gap-4 ">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10   rounded-full relative  `}
                    >
                      <div
                        className={`${
                          isActive
                            ? "opacity-100 scale-100 "
                            : "opacity-0 scale-x-50 "
                        } w-full h-full transform absolute duration-300 transition-all ease-out rounded-full bg-secondary-container dark:bg-secondary-container-dark`}
                      ></div>
                      <Js className="w-4 z-10 group-hover:scale-105 transition-all duration-200 ease-in-out fill-on-secondary-container dark:fill-on-secondary-container-dark" />
                    </div>
                    <span
                      className={`${
                        isActive ? "font-semibold" : "font-normal"
                      } text-center mt-0 md:mt-1 text-lg md:text-sm block text-on-secondary-container dark:text-on-secondary-container-dark`}
                    >
                      JavaScript
                    </span>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="w-full  mb-3.5 group">
              <NavLink to="/jquery">
                {({ isActive }) => (
                  <div className="flex  items-center  gap-4 ">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10   rounded-full relative  `}
                    >
                      <div
                        className={`${
                          isActive
                            ? "opacity-100 scale-100 "
                            : "opacity-0 scale-x-50 "
                        } w-full h-full transform absolute duration-300 transition-all ease-out rounded-full bg-secondary-container dark:bg-secondary-container-dark`}
                      ></div>
                      <Jquery className="w-5 h-5 z-10 group-hover:scale-105 transition-all duration-200 ease-in-out fill-on-secondary-container dark:fill-on-secondary-container-dark" />
                    </div>
                    <span
                      className={`${
                        isActive ? "font-semibold" : "font-normal"
                      } text-center mt-0 md:mt-1 text-lg md:text-sm block text-on-secondary-container dark:text-on-secondary-container-dark`}
                    >
                      jQuery
                    </span>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="w-full  mb-3.5 group">
              <NavLink to="/bootstrap">
                {({ isActive }) => (
                  <div className="flex  items-center  gap-4 ">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10   rounded-full relative  `}
                    >
                      <div
                        className={`${
                          isActive
                            ? "opacity-100 scale-100 "
                            : "opacity-0 scale-x-50 "
                        } w-full h-full transform absolute duration-300 transition-all ease-out rounded-full bg-secondary-container dark:bg-secondary-container-dark`}
                      ></div>
                      <Bootstrap className="w-5 z-10 group-hover:scale-105 transition-all duration-200 ease-in-out fill-on-secondary-container dark:fill-on-secondary-container-dark" />
                    </div>
                    <span
                      className={`${
                        isActive ? "font-semibold" : "font-normal"
                      } text-center mt-0 md:mt-1 text-lg md:text-sm block text-on-secondary-container dark:text-on-secondary-container-dark`}
                    >
                      Bootstrap
                    </span>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="w-full  mb-3.5 group">
              <NavLink to="/sass">
                {({ isActive }) => (
                  <div className="flex  items-center  gap-4 ">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10   rounded-full relative  `}
                    >
                      <div
                        className={`${
                          isActive
                            ? "opacity-100 scale-100 "
                            : "opacity-0 scale-x-50 "
                        } w-full h-full transform absolute duration-300 transition-all ease-out rounded-full bg-secondary-container dark:bg-secondary-container-dark`}
                      ></div>
                      <Sass className="w-5 z-10 group-hover:scale-105 transition-all duration-200 ease-in-out fill-on-secondary-container dark:fill-on-secondary-container-dark" />
                    </div>
                    <span
                      className={`${
                        isActive ? "font-semibold" : "font-normal"
                      } text-center mt-0 md:mt-1 text-lg md:text-sm block text-on-secondary-container dark:text-on-secondary-container-dark`}
                    >
                      SASS
                    </span>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="w-full  mb-3.5 group">
              <NavLink to="/react">
                {({ isActive }) => (
                  <div className="flex  items-center  gap-4 ">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10   rounded-full relative  `}
                    >
                      <div
                        className={`${
                          isActive
                            ? "opacity-100 scale-100 "
                            : "opacity-0 scale-x-50 "
                        } w-full h-full transform absolute duration-300 transition-all ease-out rounded-full bg-secondary-container dark:bg-secondary-container-dark`}
                      ></div>
                      <IconReact className="w-5 z-10 group-hover:scale-105 transition-all duration-200 ease-in-out fill-on-secondary-container dark:fill-on-secondary-container-dark" />
                    </div>
                    <span
                      className={`${
                        isActive ? "font-semibold" : "font-normal"
                      } text-center mt-0 md:mt-1 text-lg md:text-sm block text-on-secondary-container dark:text-on-secondary-container-dark`}
                    >
                      React
                    </span>
                  </div>
                )}
              </NavLink>
            </div>
          </nav>

          <div>
            <ThemeBtn />
          </div>
        </header>
      </div>
    </>
  );
}

export default Nav;
