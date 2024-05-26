import React from "react";

const LastCard = () => {
  return (
    <div className="lastCard">
      <div className="div">
        <iframe
          id="founder"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          className="video"
          src="https://www.youtube.com/embed/hNVA_SemREU?si=sFW_n8OVxj7rp8de"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default LastCard;
