import {} from "@heroicons/react/20/solid";
import ReactHlsPlayer from "react-hls-player/dist";
import React, { useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate, useParams } from "react-router-dom";

function VideoPlayer(props) {

  const playerRef = useRef();
  useEffect(() => {
    function fireOnVideoEnd() {
      alert("Video ended");
    }

    playerRef.current.addEventListener("ended", fireOnVideoEnd);

    return playerRef.current.removeEventListener("ended", fireOnVideoEnd);
  }, []);
  return (
    <div key={props.id} id="video-player" className="">
      <div>
        
        <div id="video " className="relative  ">
          <ReactHlsPlayer
            playerRef={playerRef}
            poster={props.poster}
            className="w-full shadow-xl rounded-2xl "
            src={props.src}
            autoPlay={true}
            controls={true}
            width="100%"
            height="auto"
          />
          
        </div>
      </div>
      <p className="text-xl lg:text-2xl ml-5 mt-5 font-medium ">
        {props.title}
      </p>
    </div>
  );
}

export default VideoPlayer;
