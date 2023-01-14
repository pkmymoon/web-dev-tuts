import proffessions from "../../assets/data/proffessions.json";
import React from "react";
import {  useNavigate, useParams } from "react-router-dom";

function CheckValidUrl() {
  const { proff, skill, lesson, topic } = useParams();
  const navigate = useNavigate();

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

  let lessons = null;
  proffessions.map((prof) =>
    prof.skillsList.map((sk) => (sk.link === skill ? (lessons = sk) : null))
    );
    

      if (!lessons) navigate("*");
      if (!lessonsList) navigate("*");
      if (!skillsList) navigate("*");
      if (!proffession) navigate("*");

}

export default CheckValidUrl