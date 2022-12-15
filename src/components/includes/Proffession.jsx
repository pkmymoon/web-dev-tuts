import React from 'react'
import { Link } from "react-router-dom";
import ReactHlsPlayer from "react-hls-player/dist";
import {
  ChevronRightIcon,
  ClockIcon,
  PlayCircleIcon,
  RectangleStackIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { PlayIcon, XCircleIcon } from "@heroicons/react/24/solid";

function Proffession(props) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }

    function openModal() {
      setIsOpen(true);
    }
  return (
    <li className="mb-20 last:mb-0 ml-6 group">
      <span className="flex absolute -left-[13px] text-xs justify-center items-center w-6 h-6 bg-secondary-container rounded-full dark:bg-secondary-container-dark"></span>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full flex flex-col items-start lg:w-2/4 p-5">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
            {props.title}
          </h3>
          <div className="flex items-center flex-wrap gap-4 mb-2 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
            <span className="flex items-center gap-2 text-sm">
              <Square3Stack3DIcon className="w-4 " /> {props.skills} Skills
            </span>
            <span className="flex items-center gap-2 text-sm">
              <RectangleStackIcon className="w-4 " /> {props.lessons} Lessons
            </span>
          </div>
          <div className="flex items-center flex-wrap gap-4 mb-4 rounded-full bg-surface-5 dark:bg-surface-5-dark px-2 py-1">
            <span className="flex items-center gap-2 text-sm">
              <PlayCircleIcon className="w-4 " /> {props.videos} Videos
            </span>
            <span className="flex items-center gap-2 text-sm">
              <ClockIcon className="w-4 " /> {props.duration}
            </span>
          </div>
          <div className="mb-4">
            <p className="text-lg">{props.description}</p>
          </div>
          <div className="mb-4 p-4 bg-surface-1 dark:bg-surface-1-dark rounded-3xl">
            <h5 className="text-lg font-medium mb-2">{props.question}</h5>
            <p className="text-lg">{props.answer}</p>
          </div>
        </div>
        <div className="w-full p-5 lg:w-2/4 h-full  ">
          <>
            <button
              type="button"
              onClick={openModal}
              className="h-full w-full relative "
            >
              <img
                className="shadow-2xl rounded-3xl"
                src={props.image}
                alt=""
              />
              <div className="absolute rounded-3xl flex items-center justify-center inset-0 w-full h-full bg-black bg-opacity-50">
                <PlayIcon className="w-16 text-on-primary" />
              </div>
            </button>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="shadow-2xl rounded-3xl transform overflow-hidden p-8 bg-surface-1 dark:bg-surface-1-dark text-left  align-middle transition-all  text-on-surface dark:text-on-surface-dark">
                        <div className=" inline-block absolute right-8 top-8 rounded-full">
                          <XCircleIcon
                            className="w-8 h-8 text-on-surface-variant dark:text-on-surface-variant-dark cursor-pointer"
                            onClick={closeModal}
                          />
                        </div>
                        <Dialog.Title
                          as="h3"
                          className=" text-2xl font-medium mb-6 flex items-center"
                        >
                          {props.title}
                          <Link
                            to={props.link}
                            className="ml-5 flex items-center flex-wrap gap-1 rounded-full bg-surface-5 dark:bg-surface-5-dark px-3 py-2 text-xs"
                          >
                            Learn More
                            <ChevronRightIcon className=" w-3 h-3" />
                          </Link>
                        </Dialog.Title>
                        <div className="mt-2 w-full max-w-2xl">
                          <ReactHlsPlayer
                            className="shadow-2xl rounded-3xl"
                            src={props.video}
                            autoPlay={true}
                            controls={true}
                            clip-path
                            width="100%"
                            height="100%"
                          />
                          <p className="mt-6 text-lg">{props.answer}</p>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </>
          <div className="flex items-center justify-center">
            <Link
              to={props.link}
              className="ml-5 flex mt-10 items-center flex-wrap gap-1 rounded-full bg-surface-5 dark:bg-surface-5-dark px-6 py-3 text-lg"
            >
              Learn More
              <ChevronRightIcon className=" w-5 h-5" />
            </Link>
          </div>
        </div>
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
            <g _ngcontent-gbb-c39="" clipPath="url(#clip0_2426_11367)">
              <path
                _ngcontent-gbb-c39=""
                d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                stroke="#E1E3E1"
                strokeLinecap="square"
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
      <span className="hidden group-last:flex absolute -left-[13px]  text-xs justify-center items-center w-6 h-1 bg-secondary-container dark:bg-secondary-container-dark"></span>
    </li>
  );
}

export default Proffession