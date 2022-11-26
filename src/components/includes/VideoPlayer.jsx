import {
  PlayPauseIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/20/solid";
import ReactHlsPlayer from "react-hls-player/dist";
import React from "react";

function VideoPlayer(id, title, src, topic) {
  
  const playerRef = React.useRef();
  function togglePlay() {
    playerRef.current.paused
      ? playerRef.current.play()
      : playerRef.current.pause();
  }

  return (
    <div key={id} id="video-player" className="basis-4/6 p-7 min-h-screen">
      <p className="text-4xl ml-5 mb-5 font-bold text-onBgContainer_light dark:text-onBgContainer_dark">
        {topic}
      </p>
      <div>
        <div id="video " className="relative">
          <ReactHlsPlayer
            className="w-full rounded-3xl "
            playerRef={playerRef}
            src={src}
            controls={false}
            width="100%"
            height="auto"
          />
          <div
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
          </div>
        </div>
      </div>
      <p className="text-3xl ml-5 mb-5 font-base text-onBgContainer_light dark:text-onBgContainer_dark">
        {title}
      </p>
    </div>
  );
}

export default VideoPlayer;
