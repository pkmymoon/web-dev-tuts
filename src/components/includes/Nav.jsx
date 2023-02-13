import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MenuBtn from "./MenuBtn";
import "tw-elements";
function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <>
            <div className="relative z-10 h-20 lg:h-screen w-full lg:w-60">
                {/* Overlay */}
                {navOpen ? (
                    <div
                        id="overlay"
                        className="fixed lg:hidden w-screen h-screen top-0 right-0 bottom-0 left-0 bg-background-dark opacity-80 "
                    ></div>
                ) : (
                    ""
                )}

                <header className="flex lg:flex-col fixed  items-center justify-between px-5 py-3 lg:py-5  w-full lg:w-60  h-20 lg:h-screen bg-surface-1 lg:bg-surface-2 dark:bg-surface-1-dark lg:dark:bg-surface-2-dark drop-shadow-sm ">
                    {/* MenuBtn */}
                    <div className=" relative lg:hidden">
                        <div
                            onClick={() => setNavOpen(!navOpen)}
                            className=" z-10 top-0 left-0 "
                        >
                            <MenuBtn menuStat={navOpen} />
                        </div>
                    </div>

                    {/* Nav */}
                    <Link
                        to="web-dev-tuts/"
                        className=" text-xl font-bold text-on-surface-variant my-0 lg:my-5 dark:text-on-surface-variant-dark"
                    >
                        Tech Schooling
                    </Link>
                    <nav
                        onClick={() =>
                            setTimeout(() => setNavOpen(!navOpen), 200)
                        }
                        className={`${
                            navOpen
                                ? " translate-x-0 rounded-r-2xl "
                                : " -translate-x-full lg:translate-x-0"
                        } flex flex-col items-start drop-shadow-xl lg:drop-shadow-none fixed lg:static top-0 left-0 h-screen lg:h-auto w-60  px-6  py-3  bg-surface-2 dark:bg-surface-2-dark transition-transform ease-in-out duration-300 overflow-y-auto`}
                    >
                        <div
                            onClick={() => setNavOpen(!navOpen)}
                            className=" flex items-center lg:hidden justify-center mb-4 top-0 left-0 rounded-full"
                        >
                            <MenuBtn menuStat={navOpen} />
                        </div>

                        <div className="w-full  mb-3.5 group">
                            <NavLink to="web-dev-tuts/ui-engineer">
                                {({ isActive }) => (
                                    <div
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="#d9e7cb"
                                        className="inline-block  rounded-full w-full  transition duration-150 ease-in-out text-lg lg:text-sm  text-on-secondary-container dark:text-on-secondary-container-dark"
                                    >
                                        <div
                                            className={`${
                                                isActive
                                                    ? "group-hover:bg-none  font-bold"
                                                    : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark font-normal"
                                            } flex items-center  px-6 py-3   rounded-full relative  `}
                                        >
                                            UI Engineer
                                        </div>
                                    </div>
                                )}
                            </NavLink>
                        </div>
                        <div className="w-full  mb-3.5 group">
                            <NavLink to="web-dev-tuts/backend-developer">
                                {({ isActive }) => (
                                    <div
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="#d9e7cb"
                                        className="inline-block  rounded-full w-full  transition duration-150 ease-in-out text-lg lg:text-sm  text-on-secondary-container dark:text-on-secondary-container-dark"
                                    >
                                        <div
                                            className={`${
                                                isActive
                                                    ? "group-hover:bg-none  font-bold"
                                                    : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark font-normal"
                                            } flex items-center  px-6 py-3   rounded-full relative  `}
                                        >
                                            Backend Developer
                                        </div>
                                    </div>
                                )}
                            </NavLink>
                        </div>
                        <div className="w-full  mb-3.5 group">
                            <NavLink to="web-dev-tuts/devops-engineer">
                                {({ isActive }) => (
                                    <div
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="#d9e7cb"
                                        className="inline-block  rounded-full w-full  transition duration-150 ease-in-out text-lg lg:text-sm  text-on-secondary-container dark:text-on-secondary-container-dark"
                                    >
                                        <div
                                            className={`${
                                                isActive
                                                    ? "group-hover:bg-none  font-bold"
                                                    : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark font-normal"
                                            } flex items-center  px-6 py-3   rounded-full relative  `}
                                        >
                                            DevOps Engineer
                                        </div>
                                    </div>
                                )}
                            </NavLink>
                        </div>
                        <div className="w-full  mb-3.5 group">
                            <NavLink to="web-dev-tuts/web-app-developer">
                                {({ isActive }) => (
                                    <div
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="#d9e7cb"
                                        className="inline-block  rounded-full w-full  transition duration-150 ease-in-out text-lg lg:text-sm  text-on-secondary-container dark:text-on-secondary-container-dark"
                                    >
                                        <div
                                            className={`${
                                                isActive
                                                    ? "group-hover:bg-none  font-bold"
                                                    : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark font-normal"
                                            } flex items-center  px-6 py-3   rounded-full relative  `}
                                        >
                                            Web App Developer
                                        </div>
                                    </div>
                                )}
                            </NavLink>
                        </div>
                        <div className="w-full  mb-3.5 group">
                            <NavLink to="web-dev-tuts/mobile-application-developer">
                                {({ isActive }) => (
                                    <div
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="#d9e7cb"
                                        className="inline-block  rounded-full w-full  transition duration-150 ease-in-out text-lg lg:text-sm  text-on-secondary-container dark:text-on-secondary-container-dark"
                                    >
                                        <div
                                            className={`${
                                                isActive
                                                    ? "group-hover:bg-none  font-bold"
                                                    : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark font-normal"
                                            } flex items-center  px-6 py-3   rounded-full relative  `}
                                        >
                                            Mobile App Developer
                                        </div>
                                    </div>
                                )}
                            </NavLink>
                        </div>

                        <div className="w-full  mb-3.5 group">
                            <NavLink to="web-dev-tuts/practices">
                                {({ isActive }) => (
                                    <div
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="#d9e7cb"
                                        className="inline-block  rounded-full w-full  transition duration-150 ease-in-out text-lg lg:text-sm  text-on-secondary-container dark:text-on-secondary-container-dark"
                                    >
                                        <div
                                            className={`${
                                                isActive
                                                    ? "group-hover:bg-none  font-bold"
                                                    : "group-hover:bg-surface-5 dark:group-hover:bg-surface-5-dark font-normal"
                                            } flex items-center  px-6 py-3   rounded-full relative  `}
                                        >
                                            Practices
                                        </div>
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
