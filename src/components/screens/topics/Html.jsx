import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
function Html() {
  return (
    <div className="flex">
      <div id="video-player" className="basis-4/6 p-7 min-h-screen">
        <p className="text-4xl ml-5 mb-5 font-bold text-onBgContainer_light dark:text-onBgContainer_dark">
          Introduction lorem
        </p>
        <div class="flex justify-center items-center w-full h-3/4 bg-gray-300 rounded-3xl animate-pulse dark:bg-gray-700">
          <svg
            class="w-12 h-12 text-gray-200 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 384 512"
          >
            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
          </svg>
        </div>
      </div>
      <div id="chapterList" className="basis-2/6 mr-7 my-7">
        <p className="text-4xl ml-5 mb-5 font-normal text-onBgContainer_light dark:text-onBgContainer_dark ">
          Content
        </p>
        <div className=" w-full rounded-3xl ">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center w-full justify-between rounded-3xl px-5 py-6 text-left text-base font-medium bg-primary_light dark:bg-primary_dark transition-all ease-out duration-300">
                  <span className="text-onPrimary_light dark:text-onPrimary_dark">
                    What is your refund policy?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open
                        ? "rotate-180 transform transition duration-300 ease-out"
                        : "rotate-360 transform transition duration-300 ease-out"
                    } h-5 w-5 text-onPrimary_light dark:text-onPrimary_dark`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="-translate-y-2 opacity-0"
                  enterTo="translate-y-2 opacity-100"
                  leave="transition duration-300 ease-out"
                  leaveFrom="translate-y-2 opacity-100"
                  leaveTo="-translate-y-2 opacity-0"
                >
                  <Disclosure.Panel className="px-5 py-3 text-sm text-onBgContainer_light dark:text-onBgContainer_dark">
                    <ul>
                      <li className="p-2 mb-5 w-full gap-3 cursor-pointer rounded-3xl bg-surface03-light dark:bg-surface03-dark flex items-center text-left">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-primary_light dark:bg-primary_dark">
                          <PlayCircleIcon className="w-5 text-onPrimary_light dark:text-onPrimary_dark" />
                        </div>
                        <p>Introduction</p>
                      </li>
                      <li className="p-2 mb-5 w-full gap-3 cursor-pointer rounded-3xl bg-surface03-light dark:bg-surface03-dark flex items-center text-left">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-primary_light dark:bg-primary_dark">
                          <PlayCircleIcon className="w-5 text-onPrimary_light dark:text-onPrimary_dark" />
                        </div>
                        <p>Introduction</p>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

export default Html;
