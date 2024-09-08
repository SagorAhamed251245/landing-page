import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleVideo = ({ url, id }) => {
  /* function playPause() {
    let myVideo = document.getElementById(id);
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  } */
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className="single_video">
      <div className="div" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
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
