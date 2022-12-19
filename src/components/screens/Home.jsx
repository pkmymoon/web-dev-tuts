import React from "react";
import Proffession from "../includes/Proffession";
import Proffessions from "../../assets/data/proffessions.json";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Tech Schooling | Home</title>
      </Helmet>
      <div className="h-screen p-2">
        <section className=" py-10 px-0  xl:p-24 text-on-surface dark:text-on-surface-dark">
          <div className=" w-[90%] mx-auto">
            <h2 className=" text-3xl md:text-5xl text-center font-bold mb-12 text-on-surface dark:text-on-surface-dark ">
              Proffessions
            </h2>
            <ol className="relative border-l-0 border-utility-outline dark:border-utility-outline-dark">
              {Proffessions.map((item) => (
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
    </>
  );
}

export default Home;
