import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import PracticesData from "../../assets/data/practices.json";
import { secondsTohms } from "../helpers/functions";
import { ClockIcon, RectangleStackIcon } from "@heroicons/react/24/outline";

function Practices() {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        className="w-full"
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Helmet>
          <title>Tech Schooling | </title>
        </Helmet>
        {/* <CheckValidUrl /> */}

        <section className=" w-full text-on-surface dark:text-on-surface-dark">
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
                onClick={() => navigate(`/web-dev-tuts/practices`)}
                className="inline-block transition-all ease-linear hover:scale-[101%] text-md cursor-pointer md:text-md font-semibold "
              >
                Practices
              </span>
            </p>
          </div>
          {PracticesData.map((practice) => (
            <div className="p-6 lg:px-10 z-0">
              <h3 className="text-2xl mb-5 ml-5 font-medium">
                Practices in {practice.skill}
              </h3>
              <div className="flex flex-wrap gap-4 ">
                {practice.practice_data.map((item) => (
                  <div
                    key={item.id}
                    className=" w-full md:w-[49%] group transition-all ease-linear  hover:scale-[101%] bg-surface-1 dark:bg-surface-1-dark hover:bg-secondary-container hover:dark:bg-secondary-container-dark rounded-2xl"
                  >
                    <Link to={item.lesson_pk} className="flex  items-start p-6">
                      <div className="mr-5">
                        <p className="text-xl font-bold italic">
                          #{item.order}
                        </p>
                      </div>
                      <div className="">
                        <h2 className="text-xl font-semibold group-hover:font-bold mb-3 text-on-surface dark:text-on-surface-dark hover:text-on-secondary-container group-hover:dark:text-on-secondary-container-dark">
                          {item.title}
                        </h2>
                        <h2 className="text-sm  text-on-surface dark:text-on-surface-dark hover:text-on-secondary-container group-hover:dark:text-on-secondary-container-dark">
                          {item.designation} / {item.skill}
                        </h2>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </motion.div>
    </>
  );
}

export default Practices;
