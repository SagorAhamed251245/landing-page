import React, { useState } from "react";

const SingleVideoCard = () => {
  //   const [playing, isPlaying] = useState(true);
  /*  function playPause() {
    let myVideo = document.getElementById(id);
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  } */

  return (
    <div className="single_video">
      <div className="div">
        <iframe
          loading="lazy"
          id="founder"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          className="video"
          // src="https://www.youtube.com/embed/k7PDCIxEirE?si=5s8IcNaSJc4ymIza"
          src="https://www.youtube.com/embed/k7PDCIxEirE?si=oVohkQf3ki6omxcZ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video_relative"></div>
      {/* <div className="play_button" onClick={playPause}>
        <div>
          <img   height="auto"  width="auto"  
loading="lazy" 
 src="/images/svg/Polygon.svg" alt="Play/Pause" />
        </div>
      </div> */}
    </div>
  );
};

export default SingleVideoCard;
