import React from "react";

const RightBookMeeting = () => {
  /*  function playPause() {
    let myVideo = document.getElementById("testVideo");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  } */
  return (
    <div className="right_book_meeting">
      <div>
        <div className="single_video">
          <div className="div">
            <iframe
              id="founder"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              className="video"
              src="https://www.youtube.com/embed/hNVA_SemREU?si=sFW_n8OVxj7rp8de"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          {/*  <div className="video_relative"></div>
          <div className="play_button" onClick={playPause}>
            <div>
              <img src="/images/svg/Polygon.svg" alt="Play/Pause" />
            </div>
          </div> */}
        </div>
      </div>
      <div className="absolute_image"></div>
    </div>
  );
};

export default RightBookMeeting;
