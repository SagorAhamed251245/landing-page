import React from "react";

const RightContent = () => {
  function playPause() {
    let myVideo = document.getElementById("video1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  return (
    <>
      <section className="right_banner_section">
        <p>
          Join Revolutionary Private Bootcamp Today. Pay After Getting A Job
        </p>
        <div className="div">
          {/* <button onClick="playPause()">Play/Pause</button> */}

          <video id="video1" width="420" height="100%" className="video">
            <source
              src="https://videos.pexels.com/video-files/6771767/6771767-hd_1080_1920_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* relative */}
        <div className="video_relative"></div>
        <div className="play_button" onClick={playPause}>
          <div>
            <img src="/images/svg/Polygon.svg" alt="Play/Pause" />
          </div>
        </div>
      </section>
    </>
  );
};

export default RightContent;
