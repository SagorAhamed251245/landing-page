import React from "react";

const LastCard = () => {
  return (
    <div className="lastCard">
      <div className="div">
        <iframe
          title="video"
          loading="lazy"
          id="founder"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          className="video"
          src="https://www.youtube.com/embed/FerYEgG0GOc?si=1TH8_LaX6U9tQZxd"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LastCard;
