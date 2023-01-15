import {
} from "@heroicons/react/20/solid";
import ReactHlsPlayer from "react-hls-player/dist";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate, useParams } from "react-router-dom";

function VideoPlayer(props) {
  
  const { proff, skill, lesson, topic } = useParams();
  const navigate = useNavigate();

  return (
    <div key={props.id} id="video-player" className="">
      <div>

        {/* prev and nex button */}
        {/* <div className="flex items-center justify-between">
          <div
            onClick={() =>
              navigate(
                `/web-dev-tuts/${proff}/${skill}/${lesson}/${props.previous}`
              )
            }
            className="cursor-pointer transition-all ease-linear hover:scale-[105%] flex items-center flex-wrap gap-1 rounded-full bg-surface-5 dark:bg-surface-5-dark pr-4 pl-2 py-2 text-lg"
          >
            <ChevronLeftIcon className=" w-5 h-5" />
            Previous
          </div>
          <div
            onClick={() =>
              navigate(
                `/web-dev-tuts/${proff}/${skill}/${lesson}/${props.next}`
              )
            }
            className="cursor-pointer transition-all ease-linear hover:scale-[105%] flex items-center flex-wrap gap-1 rounded-full bg-surface-5 dark:bg-surface-5-dark pl-4 pr-2 py-2 text-lg"
          >
            Next
            <ChevronRightIcon className=" w-5 h-5" />
          </div>
        </div> */}
        <div id="video " className="relative  ">
          <ReactHlsPlayer
            poster={props.poster}
            className="w-full rounded-3xl "
            src={props.src}
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
          />
          {/* <div
            id="controlls"
            className="p-7 flex items-center justify-between absolute top-0 w-full"
          >
            <div className="p-2 flex items-center justify-center rounded-full bg-primary_light dark:bg-primary_dark">
              <SpeakerWaveIcon
                className="w-5 text-onPrimary_light dark:text-onPrimary_dark"
                onClick={togglePlay}
              />
            </div>
            <div className="p-2 flex items-center justify-center rounded-full bg-primary_light dark:bg-primary_dark">
              <PlayPauseIcon
                className="w-5 text-onPrimary_light dark:text-onPrimary_dark"
                onClick={togglePlay}
              />
            </div>
            <div className="p-2 flex items-center justify-center rounded-full bg-primary_light dark:bg-primary_dark">
              <PlayPauseIcon
                className="w-5 text-onPrimary_light dark:text-onPrimary_dark"
                onClick={togglePlay}
              />
            </div>
          </div> */}
        </div>
      </div>
      <p className="text-2xl lg:text-3xl ml-5 mt-5 font-base ">{props.title}</p>
    </div>
  );
}

export default VideoPlayer;
