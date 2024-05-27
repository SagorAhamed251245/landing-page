import React from "react";

const RightContent = () => {
  /*  function playPause() {
    let myVideo = document.getElementById("video1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  } */

  return (
    <>
      <section className="right_banner_section">
        <p>
          Join Revolutionary Private Bootcamp Today. Pay After Getting A Job
        </p>
        <div className="div">
          {/* <button onClick="playPause()">Play/Pause</button> */}
          <div className="video">
            <iframe
              id="founder"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              className="video"
              src="https://www.youtube.com/embed/qeAe_iDSMbE?si=EFUdApfp_Wee86ei"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* relative */}
        <div className="video_relative"></div>
        {/*  <div className="play_button" onClick={playPause}>
          <div>
            <img src="/images/svg/Polygon.svg" alt="Play/Pause" />
          </div>
        </div> */}
      </section>
    </>
  );
};

export default RightContent;
