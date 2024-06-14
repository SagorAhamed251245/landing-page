import React from "react";

const PodcastCard = () => {
  function playPause() {
    let myVideo = document.getElementById("1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }
  return (
    <section>
      <div className="single_video podcast-card">
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
            src="https://www.youtube.com/embed/v_B5RXEqz7Q?si=AdYrd-zcnJ6NeYnU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="video_relative"></div>
        {/*   <div className="play_button" onClick={playPause}>
          <div>
            <img 
loading="lazy" 
 src="/images/svg/Polygon.svg" alt="Play/Pause" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PodcastCard;
