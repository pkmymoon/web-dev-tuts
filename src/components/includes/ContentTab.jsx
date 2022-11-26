import React, { useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import topics from "../../assets/data/topic-list.json";
import intro from "../../assets/data/technologyVids.json";

function ContentTab() {
  const Chapters = topics.data;

  return (
    <div id="chapterList" className="basis-2/6 mr-7 my-7">
      <p className="text-4xl ml-5 mb-5 font-normal text-onBgContainer_light dark:text-onBgContainer_dark ">
        Content
      </p>
      <ul>
        {intro.data.map((topic) => (
          <Link
            key={topic.id}
            to={`${ topic.title }`}
            className="p-2 mb-5 w-full cursor-pointer rounded-3xl bg-surface03-light dark:bg-surface03-dark flex items-center justify-between text-primary_light dark:text-primary_dark"
          >
            <div className="flex gap-3 items-center">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-primary_light dark:bg-primary_dark">
                <PlayCircleIcon className="w-5 text-onPrimary_light dark:text-onPrimary_dark" />
              </div>
              <p className="font-semibold">{topic.title}</p>
            </div>
            <div className="font-italics mr-2 ">
              <p>32mis</p>
            </div>
          </Link>
        ))}
      </ul>
      <div className=" w-full rounded-3xl "></div>
    </div>
  );
}

export default ContentTab;
