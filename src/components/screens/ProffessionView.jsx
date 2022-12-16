import {
  ClockIcon,
  PlayCircleIcon,
  RectangleStackIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import proffessions from "../../assets/data/proffessions.json";

function ProffessionView() {
  const { link } = useParams();

  let proffession = null;
  proffessions.map((prof) =>
    prof.link === link ? (proffession = prof) : null
  );

  return (
    <>
      <Helmet>
        <title>Tech Schooling | {proffession.title}</title>
      </Helmet>
      <section className="p-10 text-on-surface dark:text-on-surface-dark">
        <div className="">
          <h2 className=" text-3xl md:text-4xl font-bold mb-5 text-on-surface dark:text-on-surface-dark ">
            {proffession.title}
          </h2>
          <div className=" inline-block mr-2">
            <div className="flex items-center flex-wrap gap-4 mb-2 rounded-2xl bg-surface-5 dark:bg-surface-5-dark px-4 py-2">
              <span className="flex items-center gap-2 text-sm">
                <Square3Stack3DIcon className="w-4 " />
                {proffession.skills} Skills
              </span>
              <span className="flex items-center gap-2 text-sm">
                <RectangleStackIcon className="w-4 " />
                {proffession.lessons} Lessons
              </span>
            </div>
          </div>
          <div className=" inline-block">
            <div className="flex items-center flex-wrap gap-4 mb-2 rounded-2xl bg-surface-5 dark:bg-surface-5-dark px-4 py-2">
              <span className="flex items-center gap-2 text-sm">
                <PlayCircleIcon className="w-4 " />
                {proffession.videos} Videos
              </span>
              <span className="flex items-center gap-2 text-sm">
                <ClockIcon className="w-4 " /> {proffession.duration}
              </span>
            </div>
          </div>
        </div>
        <h3 className="mt-6 mb-4 text-xl underline font-semibold">
          Explore The Skills
        </h3>
        <div className="  flex flex-wrap gap-4 ">
          {proffession.skillsList.map((skill) => (
            <div className=" w-full md:w-[49%] group bg-surface-1 dark:bg-surface-1-dark hover:bg-secondary-container hover:dark:bg-secondary-container-dark rounded-2xl">
              <Link to={skill.link} className="flex items-start p-6">
                <div className="mr-5">
                  <p className="text-xl font-bold italic">#{skill.id}</p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mb-3 text-on-surface dark:text-on-surface-dark hover:text-on-secondary-container group-hover:dark:text-on-secondary-container-dark">
                    {skill.title}
                  </h2>
                  <div className="inline-block">
                    <div className="flex items-center flex-wrap gap-4 mb-2 rounded-2xl bg-surface-0 dark:bg-surface-0-dark group-hover:bg-secondary group-hover:dark:bg-secondary-dark px-4 py-2 text-on-secondary-container dark:text-on-secondary-container-dark group-hover:text-on-secondary group-hover:dark:text-on-secondary-dark">
                      <span className="flex items-center gap-2 text-sm ">
                        <RectangleStackIcon className="w-4 " /> {skill.lessons} Lessons
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
      </section>
    </>
  );
}

export default ProffessionView;
