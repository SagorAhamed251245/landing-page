import React from "react";

const RightBookMeeting = () => {
  function playPause() {
    let myVideo = document.getElementById("testVideo");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }
  return (
    <div className="right_book_meeting">
      <div>
        <div className="single_video">
          <div className="div">
            <video
              id="testVideo"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              className="video"
            >
              <source
                src={
                  "https://videos.pexels.com/video-files/1448735/1448735-uhd_4096_2160_24fps.mp4"
                }
                type="video/mp4"
              />
            </video>
          </div>
          <div className="video_relative"></div>
          <div className="play_button" onClick={playPause}>
            <div>
              <img src="/images/svg/Polygon.svg" alt="Play/Pause" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute_image"></div>
    </div>
  );
};

export default RightBookMeeting;
