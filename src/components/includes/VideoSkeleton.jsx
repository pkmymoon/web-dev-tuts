import proffessions from "../../assets/data/proffessions.json";
import React from "react";
import { useParams } from "react-router-dom";

function VideoSkeleton() {
  const { proff, skill, lesson } = useParams();

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
      <p className="text-2xl mb-5 ml-5 font-semibold">{lessonsList.title}</p>
      <div
        role="status"
        className="w-full flex justify-center items-center h-[400px] bg-surface-1 dark:bg-surface-1-dark rounded-3xl mb-5 animate-pulse "
      >
        <svg
          className="w-12 h-12 text-on-surface dark:text-on-surface-dark"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 384 512"
        >
          <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
        </svg>
      </div>
      <div class="h-8 animate-pulse rounded-full bg-surface-1 dark:bg-surface-1-dark w-48 ml-5 mt-5"></div>
    </>
  );
}

export default VideoSkeleton;
