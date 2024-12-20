import React from "react";

const PodcastCard = () => {
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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video_relative"></div>
      </div>
    </section>
  );
};

export default PodcastCard;
