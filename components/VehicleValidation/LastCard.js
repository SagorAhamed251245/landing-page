import React from "react";

const LastCard = () => {
  return (
    <div className="last_card">
      <div className="div1">
        <img src="/images/svg/leady.png" />
      </div>
      <div className="div2">
        <div className="div">
          <iframe
            id="founder"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            className="video"
            src="https://www.youtube.com/embed/htmbLrQ-dcA?si=r0uQ5iQGEK5yHqtH" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LastCard;
