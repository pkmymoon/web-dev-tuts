import { ClockIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import { Link, Outlet, useParams } from "react-router-dom";
import proffessions from "../../assets/data/proffessions.json";

function LessonsView() {
  const { proff, skill, lesson, topic } = useParams();

  let proffession = null;
  proffessions.map((prof) =>
    prof.link === proff ? (proffession = prof) : null
  );

  let skillsList = null;
  proffession.skillsList.map((ski) =>
    ski.link === skill ? (skillsList = ski) : null
  );

  let lessonsList = null;
  skillsList.lessonsList.map((lesso) =>
    lesso.link === lesson ? (lessonsList = lesso) : null
  );

  return (
    <>
      <Helmet>
        <title>
          {skillsList.title} | {lessonsList.title}
        </title>
      </Helmet>
      <section className="w-full  text-on-surface dark:text-on-surface-dark">
        <div className="px-10 py-4 z-10 sticky top-20 lg:top-0 shadow-xl bg-surface-0 dark:bg-surface-0-dark">
          <h2 className=" text-xl  md:text-2xl font-semibold text-on-surface dark:text-on-surface-dark ">
            {skillsList.title} / {lessonsList.title}
          </h2>
        </div>
        <div className="p-10 flex flex-col-reverse lg:flex-row justify-between">
          <div className="max-w-[500px] lg:w-[40%] p-0 lg:pr-5">
            <h3 className="text-2xl mb-5 ml-5 font-semibold">
              Topics <span className=" font-normal">({lessonsList.topics})</span>
            </h3>
            {lessonsList.topicsList.map((item) => (
              <div
                key={item.id}
                className="w-full group transition-all ease-linear  hover:scale-[101%] bg-surface-1 dark:bg-surface-1-dark hover:bg-secondary-container hover:dark:bg-secondary-container-dark mb-2 rounded-3xl"
              >
                <Link
                  to={item.link}
                  className="flex items-center justify-between p-5"
                >
                  <div className="flex gap-4">
                    <span className="text-lg italic font-semibold">
                      #{item.id}
                    </span>
                    <div>
                      <p className="text-lg mb-1 group-hover:font-medium">
                        {item.title}
                      </p>
                      <div className="inline-block ">
                        <div className="flex items-center  rounded-2xl bg-surface-0 dark:bg-surface-0-dark group-hover:bg-secondary group-hover:dark:bg-secondary-dark px-2 py-1 text-on-secondary-container dark:text-on-secondary-container-dark group-hover:text-on-secondary group-hover:dark:text-on-secondary-dark">
                          <span className="flex items-center gap-2 text-xs">
                            <ClockIcon className="w-4 " /> {item.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-surface-5 dark:bg-surface-5-dark">
                    <PlayCircleIcon className="w-8 h-8" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[60%] h-auto mb-10">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

export default LessonsView;
