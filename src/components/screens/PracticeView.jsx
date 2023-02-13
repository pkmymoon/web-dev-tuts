import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import PracticesData from "../../assets/data/practices.json";
import WorkshopsData from "../../assets/data/workshops.json";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { secondsTohms } from "../helpers/functions";
import {
    ArrowDownTrayIcon,
    ClockIcon,
    PlayCircleIcon,
} from "@heroicons/react/24/outline";
import ReactHlsPlayer from "react-hls-player/dist";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

function PracticeView() {
    const { practice, workshop } = useParams();
    const navigate = useNavigate();

    let currentPractice = null;
    PracticesData.map((item) =>
        item.practice_data.map((object) =>
            object.lesson_pk === practice ? (currentPractice = object) : null
        )
    );
    let Workshop = null;
    WorkshopsData.map((object) =>
        object.lesson_pk === practice ? (Workshop = object) : null
    );

    React.useEffect(() => {
        if (!workshop) navigate(Workshop.topics[0].id);
    }, []);
    return (
        <>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Helmet>
                    <title>Practice | {currentPractice.title}</title>
                </Helmet>
                {/* <CheckValidUrl/> */}
                <section className="w-full  text-on-surface dark:text-on-surface-dark">
                    <div className="text-on-surface dark:text-on-surface-dark sticky top-20 shadow-xl px-6 lg:px-10 py-4 z-10 lg:top-0  bg-surface-1 dark:bg-surface-1-dark">
                        <p>
                            <span
                                onClick={() => navigate("/web-dev-tuts")}
                                className="inline-block transition-all ease-linear hover:scale-[101%] text-md cursor-pointer md:text-md font-semibold "
                            >
                                Home
                            </span>{" "}
                            /{" "}
                            <span
                                onClick={() =>
                                    navigate(`/web-dev-tuts/practices`)
                                }
                                className="inline-block transition-all ease-linear hover:scale-[101%] text-md cursor-pointer md:text-md font-semibold "
                            >
                                Practices
                            </span>{" "}
                            /{" "}
                            <span
                                onClick={() =>
                                    navigate(
                                        `/web-dev-tuts/practices/${practice}`
                                    )
                                }
                                className="inline-block transition-all ease-linear hover:scale-[101%] text-md cursor-pointer md:text-md font-semibold "
                            >
                                {currentPractice.title}
                            </span>
                        </p>
                    </div>

                    <div className="p-6 lg:pt-10 lg:px-10">
                        <div className="mb-5 ml-5">
                            <h2 className="text-sm">{currentPractice.skill}</h2>
                            <h3 className="text-2xl  font-medium">
                                Practice: {currentPractice.topics.title}
                            </h3>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between">
                            <div className="w-full lg:w-[40%] ">
                                <ReactHlsPlayer
                                    poster={currentPractice.image}
                                    className="w-full shadow-xl rounded-2xl "
                                    src={currentPractice.topics.playlist}
                                    autoPlay={false}
                                    controls={true}
                                    width="auto"
                                    height="100%"
                                />
                            </div>
                            <div className="w-full lg:w-[60%] pt-5 lg:pl-5">
                                <p>{currentPractice.topics.description}</p>
                                {currentPractice.assets[0] && (
                                    <div className="flex items-center justify-center">
                                        <a
                                            href={
                                                currentPractice.assets[0]
                                                    ?.attachment
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className=" cursor-pointer transition-all ease-linear hover:scale-[105%] flex mt-10 items-center flex-wrap gap-1 rounded-full bg-surface-5 dark:bg-surface-5-dark px-6 py-3 text-lg"
                                        >
                                            Download Assets
                                            <FolderArrowDownIcon className="ml-2 w-6 h-6" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <h3 className=" ml-14 mt-5 text-3xl  font-medium">
                        Workshop
                    </h3>
                    <div className="p-6 lg:px-10 flex flex-col-reverse lg:flex-row justify-between">
                        <div className="w-full lg:w-[40%] p-0 lg:pr-5">
                            <h3 className="text-xl mb-5 ml-5 font-medium">
                                {currentPractice.title}:
                                <p className=" font-normal">
                                    Topics ({Workshop.topic_count})
                                </p>
                            </h3>
                            <div className="p-2 border-2 border-on-surface dark:border-on-surface-dark shadow-xl rounded-2xl">
                                <div className="pr-2 max-h-96 rounded-2xl overflow-y-auto ">
                                    {Workshop.topics.map((item) => (
                                        <NavLink key={item.id} to={item.id}>
                                            {({ isActive }) => (
                                                <div
                                                    className={`${
                                                        isActive
                                                            ? "bg-surface-2 dark:bg-surface-2-dark hover:bg-none"
                                                            : " "
                                                    }w-full group transition-all ease-linear mb-2 rounded-2xl`}
                                                >
                                                    <div className="flex items-center justify-between p-5">
                                                        <div className="flex gap-4">
                                                            <span className="text-lg italic font-semibold">
                                                                #{item.order_id}
                                                            </span>
                                                            <div>
                                                                <p className="text-lg mb-1 group-hover:font-medium">
                                                                    {item.title}
                                                                </p>
                                                                <div className="inline-block ">
                                                                    <div className="flex items-center  rounded-2xl bg-surface-1 dark:bg-surface-1-dark group-hover:bg-secondary group-hover:dark:bg-secondary-dark px-2 py-1 text-on-secondary-container dark:text-on-secondary-container-dark group-hover:text-on-secondary group-hover:dark:text-on-secondary-dark">
                                                                        <span className="flex items-center gap-2 text-xs">
                                                                            <ClockIcon className="w-4 " />{" "}
                                                                            {secondsTohms(
                                                                                item.duration
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-2 rounded-full bg-surface-5 dark:bg-surface-5-dark">
                                                            <PlayCircleIcon className="w-8 h-8" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[60%] h-auto mb-10">
                            <Outlet />
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    );
}

export default PracticeView;
