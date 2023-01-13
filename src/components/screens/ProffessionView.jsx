import { ClockIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import {motion} from "framer-motion";
import proffessions from "../../assets/data/proffessions.json";

function ProffessionView() {
  const { proff } = useParams();
    const navigate = useNavigate();
  let proffession = null;
  proffessions.map((prof) =>
    prof.link === proff ? (proffession = prof) : null
  );

  return (
    <>
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Helmet>
          <title>Tech Schooling | {proffession.title}</title>
        </Helmet>
        <section className="w-full text-on-surface dark:text-on-surface-dark">
          <div className="text-on-surface dark:text-on-surface-dark  px-10 py-4 z-10 sticky top-20 lg:top-0  border-b-2 border-surface-0 bg-surface-0 dark:bg-surface-0-dark">
            <p>
              <span
                onClick={() => navigate("/web-dev-tuts")}
                className="inline-block transition-all ease-linear hover:scale-[101%] text-md cursor-pointer md:text-md font-semibold "
              >
                Home
              </span>{" "}
              /{" "}
              <span
                onClick={() => navigate(`/web-dev-tuts/${proff}`)}
                className="inline-block transition-all ease-linear hover:scale-[101%] text-md cursor-pointer md:text-md font-bold "
              >
                {proffession.title}
              </span>
            </p>
          </div>
          <div className="px-10  z-10 sticky top-0 shadow-xl bg-surface-0 dark:bg-surface-0-dark">
            <h2 className=" text-3xl  md:text-4xl font-bold mb-4 text-on-surface dark:text-on-surface-dark ">
              {proffession.title}
            </h2>
            <div className=" inline-block mr-2">
              <div className="flex items-center flex-wrap gap-4 mb-2 rounded-2xl bg-surface-5 dark:bg-surface-5-dark px-4 py-2">
                <span className="flex items-center gap-2 text-sm">
                  <RectangleStackIcon className="w-4 " />
                  {proffession.lessons} Lessons
                </span>
              </div>
            </div>
            <div className=" inline-block">
              <div className="flex items-center flex-wrap gap-4 rounded-2xl bg-surface-5 dark:bg-surface-5-dark px-4 py-2">
                <span className="flex items-center gap-2 text-sm">
                  <ClockIcon className="w-4 " /> {proffession.duration}
                </span>
              </div>
            </div>
            <h3 className="mt-6 text-xl underline font-semibold">
              Explore The Skills
            </h3>
          </div>
          <div className="p-10 z-0">
            <div className="  flex flex-wrap gap-4 ">
              {proffession.skillsList.map((skill) => (
                <div
                  key={skill.id}
                  className=" w-full md:w-[49%] group transition-all ease-linear  hover:scale-[101%] bg-surface-1 dark:bg-surface-1-dark hover:bg-secondary-container hover:dark:bg-secondary-container-dark rounded-2xl"
                >
                  <Link to={skill.link} className="flex items-start p-6">
                    <div className="mr-5">
                      <p className="text-xl font-bold italic">#{skill.id}</p>
                    </div>
                    <div className="">
                      <h2 className="text-xl font-semibold mb-3 text-on-surface dark:text-on-surface-dark hover:text-on-secondary-container group-hover:dark:text-on-secondary-container-dark">
                        {skill.title}
                      </h2>
                      <div className="inline-block group-hover:font-normal">
                        <div className="flex items-center flex-wrap gap-4 mb-2 rounded-2xl bg-surface-0 dark:bg-surface-0-dark group-hover:bg-secondary group-hover:dark:bg-secondary-dark px-4 py-2 text-on-secondary-container dark:text-on-secondary-container-dark group-hover:text-on-secondary group-hover:dark:text-on-secondary-dark">
                          <span className="flex items-center gap-2 text-sm ">
                            <RectangleStackIcon className="w-4 " />{" "}
                            {skill.lessons} Lessons
                          </span>
                          <span className="flex items-center gap-2 text-sm">
                            <ClockIcon className="w-4 " /> {skill.duration}
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

export default ProffessionView;
