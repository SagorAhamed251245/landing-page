import React from 'react';

const PodcastCard = () => {

    function playPause() {
        let myVideo = document.getElementById("1");
        if (myVideo.paused) myVideo.play();
        else myVideo.pause();
      }
    return (
        <section>
            <div className="single_video">
        <div className="div">
          <video
            id={"1"}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            className="video"
          >
            <source src={"https://videos.pexels.com/video-files/2461326/2461326-hd_1920_1080_30fps.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className="video_relative"></div>
        <div className="play_button" onClick={playPause}>
          <div>
            <img src="/images/svg/Polygon.svg" alt="Play/Pause" />
          </div>
        </div>
      </div>
        </section>
    );
};

export default PodcastCard;