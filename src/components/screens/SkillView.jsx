import { ClockIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import proffessions from "../../assets/data/proffessions.json";
import { motion } from "framer-motion";

function SkillView() {
  const { skill } = useParams();
  let lessons = null;
  proffessions.map((prof) =>
    prof.skillsList.map((sk) => (sk.link === skill ? (lessons = sk) : null))
  );

  return (
    <>
      <motion.div
        className="w-full"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Helmet>
          <title>Tech Schooling | {lessons.title}</title>
        </Helmet>
        <section className=" w-full text-on-surface dark:text-on-surface-dark">
          <div className="p-10 z-10 sticky top-0 shadow-xl bg-surface-0 dark:bg-surface-0-dark">
            <h2 className=" text-3xl  md:text-4xl font-bold mb-5 text-on-surface dark:text-on-surface-dark ">
              {lessons.title}
            </h2>
            <div className=" inline-block mr-2">
              <div className="flex items-center flex-wrap gap-4 mb-2 rounded-2xl bg-surface-5 dark:bg-surface-5-dark px-4 py-2">
                <span className="flex items-center gap-2 text-sm">
                  <RectangleStackIcon className="w-4 " />
                  {lessons.lessons} Lessons
                </span>
              </div>
            </div>
            <div className=" inline-block">
              <div className="flex items-center flex-wrap gap-4 rounded-2xl bg-surface-5 dark:bg-surface-5-dark px-4 py-2">
                <span className="flex items-center gap-2 text-sm">
                  <ClockIcon className="w-4 " /> {lessons.duration}
                </span>
              </div>
            </div>
            <h3 className="mt-6 text-xl underline font-semibold">
              Browse Lessons in {lessons.title}
            </h3>
          </div>
          <div className="p-10 z-0">
            <div className="flex flex-wrap gap-4 ">
              {lessons.lessonsList.map((lesson) => (
                <div
                  key={lesson.id}
                  className=" w-full md:w-[49%] group transition-all ease-linear  hover:scale-[101%] bg-surface-1 dark:bg-surface-1-dark hover:bg-secondary-container hover:dark:bg-secondary-container-dark rounded-2xl"
                >
                  <Link to={lesson.link} className="flex  items-start p-6">
                    <div className="mr-5">
                      <p className="text-xl font-bold italic">#{lesson.id}</p>
                    </div>
                    <div className="">
                      <h2 className="text-xl font-semibold group-hover:font-bold mb-3 text-on-surface dark:text-on-surface-dark hover:text-on-secondary-container group-hover:dark:text-on-secondary-container-dark">
                        {lesson.title}
                      </h2>
                      <div className="inline-block group-hover:font-normal">
                        <div className="flex items-center flex-wrap gap-4 mb-2 rounded-2xl bg-surface-0 dark:bg-surface-0-dark group-hover:bg-secondary group-hover:dark:bg-secondary-dark px-4 py-2 text-on-secondary-container dark:text-on-secondary-container-dark group-hover:text-on-secondary group-hover:dark:text-on-secondary-dark">
                          <span className="flex items-center gap-2 text-sm ">
                            <RectangleStackIcon className="w-4 " />{" "}
                            {lesson.topics} Topics
                          </span>
                          <span className="flex items-center gap-2 text-sm">
                            <ClockIcon className="w-4 " /> {lesson.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default SkillView;
