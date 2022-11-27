import { Link } from "react-router-dom";
import React from "react";
import topics from "../../assets/data/topics.json";
import Background from "../../assets/images/hero.png";
import ReactHlsPlayer from "react-hls-player/dist";
import {
  ClockIcon,
  PlayCircleIcon,
  RectangleStackIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import RippleBtn from "../includes/RippleBtn";

function Home() {
  return (
    <div className="h-screen p-2">
      <section
        className="w-full rounded-3xl h-2/4 flex items-center justify-center  bg-center bg-no-repeat bg-fixed bg-cover"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <h2 className=" text-5xl md:text-6xl font-bold text-primary dark:text-on-primary-dark ">
          Learn to Code
        </h2>
        <p></p>
      </section>
      <section className=" py-20 px-0  xl:p-24 text-on-surface dark:text-on-surface-dark">
        <h2 className=" text-4xl text-center md:text-5xl font-semibold mb-20">
          Where to Start?
        </h2>
        <div className=" w-[90%] mx-auto">
          <ol class="relative border-l-2 border-utility-outline dark:border-utility-outline-dark">
            {/* UI Engineer */}

            <li class="mb-20 ml-6">
              <span class="flex absolute -left-[13px] text-xs justify-center items-center w-6 h-6 bg-secondary-container rounded-full dark:bg-secondary-container-dark"></span>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full flex flex-col items-start md:w-2/4 p-5">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    UI Engineer
                  </h3>
                  <div className="flex items-center flex-wrap gap-4 mb-2 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
                    <span className="flex items-center gap-2 text-sm">
                      <Square3Stack3DIcon className="w-4 " /> 10 Skills
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <RectangleStackIcon className="w-4 " /> 97 Lessons
                    </span>
                  </div>
                  <div className="flex items-center flex-wrap gap-4 mb-4 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
                    <span className="flex items-center gap-2 text-sm">
                      <PlayCircleIcon className="w-4 " /> 558 Videos
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <ClockIcon className="w-4 " /> 57 hrs 29 mins
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg">
                      Develop an interactive responsive website using HTML, CSS,
                      JavaScript and its modern Frameworks.
                    </p>
                  </div>
                  <div className="mb-4 p-4 bg-surface-1 dark:bg-surface-1-dark rounded-3xl">
                    <h5 className="text-lg font-medium mb-2">
                      What you need to know before you get started with UI
                      Engineer?
                    </h5>
                    <p className="text-md">
                      UI Engineer is also known as User Interface Engineer whose
                      job is to think from the user perspective and to design
                      websites and web applications that are attractive and
                      extremely functional.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/4 h-full  ">
                  <ReactHlsPlayer
                    poster="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                    className="h-full w-full shadow-2xl rounded-3xl bg-black"
                    src="https://talrop-learn-converted-hls-videos.s3.ap-south-1.amazonaws.com/videos/e-learning/designations/34167af1-49ec-4330-92e0-eceb0aa06cf8/HLS/34167af1-49ec-4330-92e0-eceb0aa06cf8.m3u8"
                    controls={true}
                    width="auto"
                    height="100%"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-center">
                <Link to="ui-engineer" className="mt-5">
                  <RippleBtn label="Learn More" />
                </Link>
              </div>
              <div className="mt-10 w-2/4 mx-auto h-2 ">
                <svg
                  className="text-utility-outline dark:text-utility-outline-dark"
                  _ngcontent-gbb-c39=""
                  aria-hidden="true"
                  width="100%"
                  height="8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <pattern
                    _ngcontent-gbb-c39=""
                    id="a"
                    width="91"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <g _ngcontent-gbb-c39="" clip-path="url(#clip0_2426_11367)">
                      <path
                        _ngcontent-gbb-c39=""
                        d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                        stroke="#E1E3E1"
                        stroke-linecap="square"
                      ></path>
                    </g>
                  </pattern>
                  <rect
                    _ngcontent-gbb-c39=""
                    width="100%"
                    height="100%"
                    fill="url(#a)"
                  ></rect>
                </svg>
              </div>
            </li>
            {/* Backend Developer */}
            <li class="mb-20 ml-6">
              <span class="flex absolute -left-[13px] text-xs justify-center items-center w-6 h-6 bg-secondary-container rounded-full dark:bg-secondary-container-dark"></span>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full flex flex-col items-start md:w-2/4 p-5">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    Backend Developer
                  </h3>
                  <div className="flex items-center flex-wrap gap-4 mb-2 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
                    <span className="flex items-center gap-2 text-sm">
                      <Square3Stack3DIcon className="w-4 " /> 10 Skills
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <RectangleStackIcon className="w-4 " /> 97 Lessons
                    </span>
                  </div>
                  <div className="flex items-center flex-wrap gap-4 mb-4 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
                    <span className="flex items-center gap-2 text-sm">
                      <PlayCircleIcon className="w-4 " /> 558 Videos
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <ClockIcon className="w-4 " /> 57 hrs 29 mins
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg">
                      Build beautiful websites with CMS features using Python
                      and Django web framework.
                    </p>
                  </div>
                  <div className="mb-4 p-4 bg-surface-1 dark:bg-surface-1-dark rounded-3xl">
                    <h5 className="text-lg font-medium mb-2">
                      What you need to know before you get started with UI
                      Engineer?
                    </h5>
                    <p className="text-md">
                      UI Engineer is also known as User Interface Engineer whose
                      job is to think from the user perspective and to design
                      websites and web applications that are attractive and
                      extremely functional.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/4 h-full  ">
                  <ReactHlsPlayer
                    poster="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                    className="h-full w-full shadow-2xl rounded-3xl bg-black"
                    src="https://talrop-learn-converted-hls-videos.s3.ap-south-1.amazonaws.com/videos/e-learning/designations/34167af1-49ec-4330-92e0-eceb0aa06cf8/HLS/34167af1-49ec-4330-92e0-eceb0aa06cf8.m3u8"
                    controls={true}
                    width="auto"
                    height="100%"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-center">
                <Link to="#" className="mt-5">
                  <RippleBtn label="Learn More" />
                </Link>
              </div>
              <div className="mt-10 w-2/4 mx-auto h-2 ">
                <svg
                  className="text-utility-outline dark:text-utility-outline-dark"
                  _ngcontent-gbb-c39=""
                  aria-hidden="true"
                  width="100%"
                  height="8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <pattern
                    _ngcontent-gbb-c39=""
                    id="a"
                    width="91"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <g _ngcontent-gbb-c39="" clip-path="url(#clip0_2426_11367)">
                      <path
                        _ngcontent-gbb-c39=""
                        d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                        stroke="#E1E3E1"
                        stroke-linecap="square"
                      ></path>
                    </g>
                  </pattern>
                  <rect
                    _ngcontent-gbb-c39=""
                    width="100%"
                    height="100%"
                    fill="url(#a)"
                  ></rect>
                </svg>
              </div>
            </li>
            {/* DevOps Engineer */}
            <li class="mb-20 ml-6">
              <span class="flex absolute -left-[13px] text-xs justify-center items-center w-6 h-6 bg-secondary-container rounded-full dark:bg-secondary-container-dark"></span>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full flex flex-col items-start md:w-2/4 p-5">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    DevOps Engineer
                  </h3>
                  <div className="flex items-center flex-wrap gap-4 mb-2 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
                    <span className="flex items-center gap-2 text-sm">
                      <Square3Stack3DIcon className="w-4 " /> 10 Skills
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <RectangleStackIcon className="w-4 " /> 97 Lessons
                    </span>
                  </div>
                  <div className="flex items-center flex-wrap gap-4 mb-4 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
                    <span className="flex items-center gap-2 text-sm">
                      <PlayCircleIcon className="w-4 " /> 558 Videos
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <ClockIcon className="w-4 " /> 57 hrs 29 mins
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg">
                      Build, publish and maintain web application
                    </p>
                  </div>
                  <div className="mb-4 p-4 bg-surface-1 dark:bg-surface-1-dark rounded-3xl">
                    <h5 className="text-lg font-medium mb-2">
                      What you need to know before you get started with UI
                      Engineer?
                    </h5>
                    <p className="text-md">
                      UI Engineer is also known as User Interface Engineer whose
                      job is to think from the user perspective and to design
                      websites and web applications that are attractive and
                      extremely functional.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/4 h-full  ">
                  <ReactHlsPlayer
                    poster="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                    className="h-full w-full shadow-2xl rounded-3xl bg-black"
                    src="https://talrop-learn-converted-hls-videos.s3.ap-south-1.amazonaws.com/videos/e-learning/designations/34167af1-49ec-4330-92e0-eceb0aa06cf8/HLS/34167af1-49ec-4330-92e0-eceb0aa06cf8.m3u8"
                    controls={true}
                    width="auto"
                    height="100%"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-center">
                <Link to="#" className="mt-5">
                  <RippleBtn label="Learn More" />
                </Link>
              </div>
              <div className="mt-10 w-2/4 mx-auto h-2 ">
                <svg
                  className="text-utility-outline dark:text-utility-outline-dark"
                  _ngcontent-gbb-c39=""
                  aria-hidden="true"
                  width="100%"
                  height="8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <pattern
                    _ngcontent-gbb-c39=""
                    id="a"
                    width="91"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <g _ngcontent-gbb-c39="" clip-path="url(#clip0_2426_11367)">
                      <path
                        _ngcontent-gbb-c39=""
                        d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                        stroke="#E1E3E1"
                        stroke-linecap="square"
                      ></path>
                    </g>
                  </pattern>
                  <rect
                    _ngcontent-gbb-c39=""
                    width="100%"
                    height="100%"
                    fill="url(#a)"
                  ></rect>
                </svg>
              </div>
            </li>
            {/* Web Application Developer */}
            <li class="mb-20 ml-6">
              <span class="flex absolute -left-[13px] text-xs justify-center items-center w-6 h-6 bg-secondary-container rounded-full dark:bg-secondary-container-dark"></span>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full flex flex-col items-start md:w-2/4 p-5">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    Web Application Developer
                  </h3>
                  <div className="flex items-center flex-wrap gap-4 mb-2 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
                    <span className="flex items-center gap-2 text-sm">
                      <Square3Stack3DIcon className="w-4 " /> 10 Skills
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <RectangleStackIcon className="w-4 " /> 97 Lessons
                    </span>
                  </div>
                  <div className="flex items-center flex-wrap gap-4 mb-4 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
                    <span className="flex items-center gap-2 text-sm">
                      <PlayCircleIcon className="w-4 " /> 558 Videos
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <ClockIcon className="w-4 " /> 57 hrs 29 mins
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg">
                      Build an entire Web application with Frontend, Backend and
                      API connections.
                    </p>
                  </div>
                  <div className="mb-4 p-4 bg-surface-1 dark:bg-surface-1-dark rounded-3xl">
                    <h5 className="text-lg font-medium mb-2">
                      What you need to know before you get started with UI
                      Engineer?
                    </h5>
                    <p className="text-md">
                      UI Engineer is also known as User Interface Engineer whose
                      job is to think from the user perspective and to design
                      websites and web applications that are attractive and
                      extremely functional.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/4 h-full  ">
                  <ReactHlsPlayer
                    poster="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                    className="h-full w-full shadow-2xl rounded-3xl bg-black"
                    src="https://talrop-learn-converted-hls-videos.s3.ap-south-1.amazonaws.com/videos/e-learning/designations/34167af1-49ec-4330-92e0-eceb0aa06cf8/HLS/34167af1-49ec-4330-92e0-eceb0aa06cf8.m3u8"
                    controls={true}
                    width="auto"
                    height="100%"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-center">
                <Link to="#" className="mt-5">
                  <RippleBtn label="Learn More" />
                </Link>
              </div>
              <div className="mt-10 w-2/4 mx-auto h-2 ">
                <svg
                  className="text-utility-outline dark:text-utility-outline-dark"
                  _ngcontent-gbb-c39=""
                  aria-hidden="true"
                  width="100%"
                  height="8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <pattern
                    _ngcontent-gbb-c39=""
                    id="a"
                    width="91"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <g _ngcontent-gbb-c39="" clip-path="url(#clip0_2426_11367)">
                      <path
                        _ngcontent-gbb-c39=""
                        d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                        stroke="#E1E3E1"
                        stroke-linecap="square"
                      ></path>
                    </g>
                  </pattern>
                  <rect
                    _ngcontent-gbb-c39=""
                    width="100%"
                    height="100%"
                    fill="url(#a)"
                  ></rect>
                </svg>
              </div>
            </li>
            {/* Mobile Application Developer */}
            <li class="mb-20 ml-6">
              <span class="flex absolute -left-[13px] text-xs justify-center items-center w-6 h-6 bg-secondary-container rounded-full dark:bg-secondary-container-dark"></span>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full flex flex-col items-start md:w-2/4 p-5">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    Mobile Application Developer
                  </h3>
                  <div className="flex items-center flex-wrap gap-4 mb-2 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
                    <span className="flex items-center gap-2 text-sm">
                      <Square3Stack3DIcon className="w-4 " /> 10 Skills
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <RectangleStackIcon className="w-4 " /> 97 Lessons
                    </span>
                  </div>
                  <div className="flex items-center flex-wrap gap-4 mb-4 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
                    <span className="flex items-center gap-2 text-sm">
                      <PlayCircleIcon className="w-4 " /> 558 Videos
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <ClockIcon className="w-4 " /> 57 hrs 29 mins
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg">
                      Creating iOS and Android Applications and publishing on
                      respective platform.
                    </p>
                  </div>
                  <div className="mb-4 p-4 bg-surface-1 dark:bg-surface-1-dark rounded-3xl">
                    <h5 className="text-lg font-medium mb-2">
                      What you need to know before you get started with UI
                      Engineer?
                    </h5>
                    <p className="text-md">
                      UI Engineer is also known as User Interface Engineer whose
                      job is to think from the user perspective and to design
                      websites and web applications that are attractive and
                      extremely functional.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/4 h-full  ">
                  <ReactHlsPlayer
                    poster="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                    className="h-full w-full shadow-2xl rounded-3xl bg-black"
                    src="https://talrop-learn-converted-hls-videos.s3.ap-south-1.amazonaws.com/videos/e-learning/designations/34167af1-49ec-4330-92e0-eceb0aa06cf8/HLS/34167af1-49ec-4330-92e0-eceb0aa06cf8.m3u8"
                    controls={true}
                    width="auto"
                    height="100%"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-center">
                <Link to="#" className="mt-5">
                  <RippleBtn label="Learn More" />
                </Link>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Home;
