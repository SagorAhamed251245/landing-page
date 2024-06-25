import Image from "next/image";
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
              title="video"
              loading="lazy"
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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="absolute_image">
        <Image
          loading="lazy"
          height={517}
          width={480}
          src="/images/image/MIState.jpg"
          alt="Mi state"
        />
      </div>
    </div>
  );
};

export default RightBookMeeting;
