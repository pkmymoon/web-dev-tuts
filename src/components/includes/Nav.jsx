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
      <div className="relative ">
        {navOpen ? (
          <div
            id="overlay"
            className="absolute w-screen h-screen backdrop-blur-md md:hidden top-0 right-0 bottom-0 left-0 bg-background-dark opacity-50 "
          ></div>
        ) : (
          ""
        )}

        <div className="flex flex-row md:flex-col fixed  top-0  items-center justify-between px-5 py-3 md:py-6 w-full md:w-auto h-auto md:h-screen bg-surface-0 dark:bg-surface-0-dark md:bg-surface-2 md:dark:bg-surface-2-dark md:overflow-y-auto">
          <div onClick={() => setNavOpen(!navOpen)} className="md:absolute">
            <MenuBtn menuStat={navOpen} />
          </div>
          {/* Nav */}

          <nav
            onClick={() => setNavOpen(!navOpen)}
            className={`${
              navOpen ? " translate-x-0 rounded-r-2xl" : " -translate-x-full"
            } md:translate-x-0 drop-shadow-xl md:drop-shadow-none absolute md:static top-0 left-0 h-screen md:h-auto w-60 md:w-full px-6 md:px-0 py-3  md:py-0  md:bg-none bg-surface-2 dark:bg-surface-2-dark transition-transform ease-in-out duration-300 overflow-y-auto md:over`}
          >
            <div
              onClick={() => setNavOpen(!navOpen)}
              className="md:absolute mb-4"
            >
              <MenuBtn menuStat={navOpen} />
            </div>
            <div className="w-full md:w-20 mb-3.5 group">
              <NavLink to="/">
                {({ isActive }) => (
                  <div className="flex rounded-full md:block items-center gap-4 md:gap-0">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10 md:w-14 md:h-8 md:mx-auto rounded-full relative  `}
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
            <div className="w-full md:w-20 mb-3.5 group">
              <NavLink to="/html">
                {({ isActive }) => (
                  <div className="flex rounded-full md:block items-center gap-4 md:gap-0">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10 md:w-14 md:h-8 md:mx-auto rounded-full relative  `}
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
            <div className="w-full md:w-20 mb-3.5 group">
              <NavLink to="/css">
                {({ isActive }) => (
                  <div className="flex md:block items-center  gap-4 md:gap-0">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10 md:w-14 md:h-8 md:mx-auto rounded-full relative  `}
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
            <div className="w-full md:w-20 mb-3.5 group">
              <NavLink to="/java-script">
                {({ isActive }) => (
                  <div className="flex md:block items-center  gap-4 md:gap-0">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10 md:w-14 md:h-8 md:mx-auto rounded-full relative  `}
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
            <div className="w-full md:w-20 mb-3.5 group">
              <NavLink to="/jquery">
                {({ isActive }) => (
                  <div className="flex md:block items-center  gap-4 md:gap-0">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10 md:w-14 md:h-8 md:mx-auto rounded-full relative  `}
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
            <div className="w-full md:w-20 mb-3.5 group">
              <NavLink to="/bootstrap">
                {({ isActive }) => (
                  <div className="flex md:block items-center  gap-4 md:gap-0">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10 md:w-14 md:h-8 md:mx-auto rounded-full relative  `}
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
            <div className="w-full md:w-20 mb-3.5 group">
              <NavLink to="/sass">
                {({ isActive }) => (
                  <div className="flex md:block items-center  gap-4 md:gap-0">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10 md:w-14 md:h-8 md:mx-auto rounded-full relative  `}
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
            <div className="w-full md:w-20 mb-3.5 group">
              <NavLink to="/react">
                {({ isActive }) => (
                  <div className="flex md:block items-center  gap-4 md:gap-0">
                    <div
                      className={`${
                        isActive
                          ? "group-hover:bg-none"
                          : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark"
                      } flex items-center justify-center w-16 h-10 md:w-14 md:h-8 md:mx-auto rounded-full relative  `}
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
        </div>
      </div>
    </>
  );
}

export default Nav;
