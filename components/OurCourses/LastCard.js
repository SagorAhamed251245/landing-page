import React from "react";

const LastCard = () => {
  return (
    <div className="last_card">
      <div className="div">
        <iframe
          id="founder"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          className="video"
          src="https://www.youtube.com/embed/msUn2Ghk-8o?si=F-xIWuMmLQ7oFnTI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="yellow_vector"></div>
    </div>
  );
};

export default LastCard;
