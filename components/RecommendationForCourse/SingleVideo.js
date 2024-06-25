import React from "react";

const SingleVideo = ({ url, id }) => {
  /* function playPause() {
    let myVideo = document.getElementById(id);
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  } */
  return (
    <div className="single_video">
      <div className="div">
        <iframe
          title="video"
          loading="lazy"
          id={id}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          className="video"
          // src="https://www.youtube.com/embed/k7PDCIxEirE?si=5s8IcNaSJc4ymIza"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video_relative"></div>
    </div>
  );
};

export default SingleVideo;
