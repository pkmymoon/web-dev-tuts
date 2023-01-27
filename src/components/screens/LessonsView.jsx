import { ClockIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Helmet } from "react-helmet";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import data from "../../assets/data/data.json";
import { secondsTohms } from "../helpers/functions";
import CheckValidUrl from "../includes/CheckValidUrl";
import ScrollToTop from "../includes/ScrollToTop";

function LessonsView() {
  const { proff, skill, lesson, topic } = useParams();
  const navigate = useNavigate();

  let proffession = null;
  data.map((prof) => (prof.link === proff ? (proffession = prof) : null));

  let skillsList = null;
  proffession.skillsList.map((ski) =>
    ski.id === skill ? (skillsList = ski) : null
  );

  let lessonsList = null;
  skillsList.lessonsList.map((lesso) =>
    lesso.id === lesson ? (lessonsList = lesso) : null
  );

  let lessons = null;
  data.map((prof) =>
    prof.skillsList.map((sk) => (sk.id === skill ? (lessons = sk) : null))
  );

  let practiceLink = null;
  

  if (!lessons) navigate("dsdsds");

  React.useEffect(() => {
    if (!topic) navigate(lessonsList.topicList[0].id);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Helmet>
        <title>
          {skillsList.name} | {lessonsList.name}
        </title>
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
              onClick={() => navigate(`/web-dev-tuts/${proff}`)}
              className="inline-block transition-all ease-linear hover:scale-[101%] text-md cursor-pointer md:text-md font-semibold "
            >
              {proffession.title}
            </span>{" "}
            /{" "}
            <span
              onClick={() => navigate(`/web-dev-tuts/${proff}/${skill}`)}
              className="inline-block transition-all ease-linear hover:scale-[101%] text-md cursor-pointer md:text-md font-semibold "
            >
              {lessons.name}
            </span>{" "}
            /{" "}
            <span
              onClick={() =>
                navigate(`/web-dev-tuts/${proff}/${skill}/${lesson}`)
              }
              className="inline-block transition-all ease-linear hover:scale-[101%] text-md cursor-pointer md:text-md font-bold "
            >
              {lessonsList.name}
            </span>
          </p>
        </div>
        <div className="p-6 lg:p-10 flex flex-col-reverse lg:flex-row justify-between">
          <div className="w-full lg:w-[40%] p-0 lg:pr-5">
            <h3 className="text-xl mb-5 ml-5 font-medium">
              {lessonsList.name}:
              <p className=" font-normal">Topics ({lessonsList.topics})</p>
            </h3>
            {lessonsList.topicList.map((item) => (
              <NavLink key={item.id} to={item.id}>
                {({ isActive }) => (
                  <div
                    className={`${
                      isActive
                        ? "bg-surface-2 dark:bg-surface-2-dark hover:bg-none"
                        : " "
                    }w-full group transition-all ease-linear  hover:scale-[101%]   mb-2 rounded-3xl`}
                  >
                    <div className="flex items-center justify-between p-5">
                      <div className="flex gap-4">
                        <span className="text-lg italic font-semibold">
                          #{item.order_id}
                        </span>
                        <div>
                          <p className="text-lg mb-1 group-hover:font-medium">
                            {item.name}
                          </p>
                          <div className="inline-block ">
                            <div className="flex items-center  rounded-2xl bg-surface-1 dark:bg-surface-1-dark group-hover:bg-secondary group-hover:dark:bg-secondary-dark px-2 py-1 text-on-secondary-container dark:text-on-secondary-container-dark group-hover:text-on-secondary group-hover:dark:text-on-secondary-dark">
                              <span className="flex items-center gap-2 text-xs">
                                <ClockIcon className="w-4 " />{" "}
                                {secondsTohms(item.duration)}
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
          <div className="w-full lg:w-[60%] h-auto mb-10">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

export default LessonsView;
