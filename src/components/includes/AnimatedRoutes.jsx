import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "../screens/Home";
import LessonsView from "../screens/LessonsView";
import TopicView from "../screens/TopicView";
import ProffessionView from "../screens/ProffessionView";
import SkillView from "../screens/SkillView";
import { motion, AnimatePresence } from "framer-motion";
import VideoSkeleton from "./VideoSkeleton";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence classname="w-full">
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="web-dev-tuts/" element={<Home />} />
          <Route path="web-dev-tuts/:proff" element={<ProffessionView />} />
          <Route path="web-dev-tuts/:proff/:skill" element={<SkillView />} />
          <Route
            path="web-dev-tuts/:proff/:skill/:lesson"
            element={<LessonsView />}
          >
            <Route index element={<VideoSkeleton />} />
            <Route path=":topic" element={<TopicView />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
