import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import ReactHlsPlayer from "react-hls-player/dist";
import { useParams } from "react-router-dom";
import WorkshopsData from "../../assets/data/workshops.json";
import VideoPlayer from "../includes/VideoPlayer";

function WorkshopView() {
  const { practice, workshop } = useParams();

  let Workshop = null;
  WorkshopsData.map((object) =>
    object.title === practice ? (Workshop = object) : null
  );

  let topic = null;
  Workshop.topics.map((item) => (item.id === workshop ? (topic = item) : null));
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className=" bg-surface-1 pt-4 rounded-2xl dark:bg-surface-3-dark">
          <p className="text-xl lg:text-2xl ml-5 mb-4 font-medium ">
            {topic.title}
          </p>
          <ReactHlsPlayer
            poster={topic.image}
            className="w-full shadow-xl rounded-2xl "
            src={topic.playlist}
            autoPlay={false}
            controls={true}
            width="auto"
            height="100%"
          />
        </div>
      </motion.div>
    </>
  );
}

export default WorkshopView;
