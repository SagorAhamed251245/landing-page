import React from "react";

const RightContent = () => {
  return (
    <>
      {" "}
      {/* <section className="video_section">
      <div
        className=""
        style={{
          display: "flex",
          height: "500px",
        }}
      >
        <iframe src="https://cdn.pixabay.com/video/2020/05/07/38388-418005845_large.mp4?controls=1"></iframe>
      </div>
    </section> */}
      <section className="video_section">
        <p>
          Join Revolutionary Private Bootcamp Today. Pay After Getting A Job
        </p>
        <div className="div">
          {/* <button onClick="playPause()">Play/Pause</button> */}

          <video id="video1" width="420" height="100%">
            <source
              src="https://videos.pexels.com/video-files/3324489/3324489-hd_1080_1920_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* relative */}
        <div className="video_relative"></div>
      </section>
    </>
  );
};

export default RightContent;
