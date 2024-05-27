import React, { useState } from "react";

const SingleVideoCard = ({ url, id }) => {
  //   const [playing, isPlaying] = useState(true);
  /* function playPause() {
    let myVideo = document.getElementById(id);
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  } */

  return (
    <div className="single_video">
      <div className="div">
        <iframe
          id="founder"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            display: "flex",
          }}
          className="video"
          // src="https://www.youtube.com/embed/k7PDCIxEirE?si=5s8IcNaSJc4ymIza"
          src="https://player.vimeo.com/video/927015929?h=1c3232c72c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video_relative"></div>
      {/* <div className="play_button" onClick={playPause}>
        <div>
          <img src="/images/svg/Polygon.svg" alt="Play/Pause" />
        </div>
      </div> */}
    </div>
  );
};

export default SingleVideoCard;
