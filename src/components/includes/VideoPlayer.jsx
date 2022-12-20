import {
  PlayPauseIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/20/solid";
import ReactHlsPlayer from "react-hls-player/dist";
import React from "react";

function VideoPlayer(props) {
  
  // const playerRef = React.useRef();
  // function togglePlay() {
  //   playerRef.current.paused
  //     ? playerRef.current.play()
  //     : playerRef.current.pause();
  // }

  return (
    <div
      key={props.id}
      id="video-player"
      className=""
    >
      
      <div>
        <div id="video " className="relative">
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
      <p className="text-3xl ml-5 mt-5 font-base ">
        {props.title}
      </p>
    </div>
  );
}

export default VideoPlayer;
