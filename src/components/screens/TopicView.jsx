import React, { useEffect, useRef } from "react";
import data from "../../assets/data/data.json";
import { useParams } from "react-router-dom";
import VideoPlayer from "../includes/VideoPlayer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import CheckValidUrl from "../includes/CheckValidUrl";

function TopicView() {
  
  
  
  const { proff, skill, lesson, topic } = useParams();

  let proffession = null;
  data.map((prof) =>
    prof.link === proff ? (proffession = prof) : null
  );

  let skillsList = null;
  proffession.skillsList.map((ski) =>
    ski.id === skill ? (skillsList = ski) : null
  );

  let lessonsList = null;
  skillsList.lessonsList.map((lesso) =>
    lesso.id === lesson ? (lessonsList = lesso) : null
  );

  let topicName = null;
  lessonsList.topicList.map((top) =>
    top.id === topic ? (topicName = top) : null
  );
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
            {skillsList.name} | {topicName.name}
          </title>
        </Helmet>

        <VideoPlayer
          id={topicName.id}
          title={topicName.name}
          poster={topicName.image}
          src={topicName.playlist.auto.playlist}
        />
      </motion.div>
    </>
  );
}

export default TopicView;
