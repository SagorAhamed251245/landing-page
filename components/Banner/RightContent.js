import React from "react";

const RightContent = () => {
  return (
    <section className="video_section">
      <div
        className=""
        style={{
          display: "flex",
          height: "200px",
        }}
      >
        <video width="614px" height="" controls>
          <source
            src="https://cdn.pixabay.com/video/2020/05/07/38388-418005845_large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default RightContent;
