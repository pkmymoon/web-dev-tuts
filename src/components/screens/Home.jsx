import React from "react";
import topics from "../../assets/data/topics.json";
import Background from "../../assets/images/hero-img.jpg";
import Proffession from "../includes/Proffession";
import Proffessions from "../../assets/data/proffessions.json";

function Home() {
  return (
    <div className="h-screen p-2">
      <section
        className="w-full rounded-3xl h-2/6 flex items-center justify-center  bg-center bg-no-repeat bg-fixed bg-cover"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <h2 className=" text-5xl lg:text-6xl font-bold text-on-primary dark:text-on-primary ">
          Tech Schooling
        </h2>
        <p></p>
      </section>
      <section className=" py-20 px-0  xl:p-24 text-on-surface dark:text-on-surface-dark">
        
        <div className=" w-[90%] mx-auto">
          <ol className="relative border-l-2 border-utility-outline dark:border-utility-outline-dark">
            {Proffessions.map((item) => (
              <Proffession
                key={item.id}
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
            {/* {Proffessions.map((Proffession) => (
              <Proffession
                key={Proffession.id}
                link={Proffession.link}
                title={Proffession.title}
                skills={Proffessions.skills}
                lessons={Proffessions.lessons}
                videos={Proffessions.videos}
                duration={Proffessions.duration}
                description={Proffession.description}
                question={Proffession.question}
                answer={Proffession.answer}
                image={Proffession.image}
                video={Proffession.video}
              />
            ))} */}
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Home;
