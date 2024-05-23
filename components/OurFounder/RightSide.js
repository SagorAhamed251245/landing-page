import React from "react";

const RightSide = () => {
  function playPause() {
    let myVideo = document.getElementById("founder");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }
  return (
    <div className="founder_info_right">
      <div className="img_div">
        <img src="/images/image/founder.png" />
      </div>
      <div className="video_card">
        <div className="single_video">
          <div className="div">
            <video
              id="founder"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              className="video"
            >
              <source
                src="https://videos.pexels.com/video-files/20770858/20770858-hd_1080_1920_30fps.mp4"
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
      <img
        style={{ position: "absolute", bottom: "0", right: "0", zIndex: "-1" }}
        src="/images/svg/Vector 16.svg"
      />
    </div>
  );
};

export default RightSide;
