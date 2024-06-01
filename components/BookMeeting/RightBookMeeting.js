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
                overflow: "hidden",
              }}
              className="video"
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fts4u.us%2Fvideos%2F1080286049717678%2F&show_text=false&width=269&t=0"
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
      <div className="absolute_image">
        <img src="/images/image/MIState.jpg" />
      </div>
    </div>
  );
};

export default RightBookMeeting;
