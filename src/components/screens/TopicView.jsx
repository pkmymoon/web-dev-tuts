import React from "react";
import proffessions from "../../assets/data/proffessions.json";
import { useParams } from "react-router-dom";
import VideoPlayer from "../includes/VideoPlayer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function TopicView() {
  const { proff, skill, lesson, topic } = useParams();

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

  let topicName = null;
  lessonsList.topicsList.map((top) =>
    top.link === topic ? (topicName = top) : null
  );
  console.log(topicName);
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Helmet>
          <title>
            {skillsList.title} | {topicName.title}
          </title>
        </Helmet>
        <VideoPlayer
          id={topicName.id}
          title={topicName.title}
          poster={topicName.poster}
          src={topicName.video}
          previous={topicName.previous}
          next={topicName.next}
        />
      </motion.div>
    </>
  );
}

export default TopicView;
