import React from "react";
import Proffession from "../includes/Proffession";
import data from "../../assets/data/data.json";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import CheckValidUrl from "../includes/CheckValidUrl";

function Home() {

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
          <title>Tech Schooling | Home</title>
        </Helmet>
        {/* <CheckValidUrl /> */}

        <div className="h-screen p-2">
          <section className=" py-10 px-0  xl:p-24 text-on-surface dark:text-on-surface-dark">
            <div className=" w-[90%] mx-auto">
              <h2 className=" text-3xl md:text-5xl text-center font-bold mb-12 text-on-surface dark:text-on-surface-dark ">
                Proffessions
              </h2>
              <ol className="relative border-l-0 border-utility-outline dark:border-utility-outline-dark">
                {data.map((item) => (
                  <Proffession
                    key={item.id}
                    id={item.id}
                    link={item.link}
                    title={item.title}
                    skills={item.skills}
                    lessons={item.lessons}
                    videos={item.videos}
                    duration={item.duration}
                    description={item.description}
                    question={item.question}
                    answer={item.answer}
                    image={item.image}
                    video={item.video}
                  />
                ))}
              </ol>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
