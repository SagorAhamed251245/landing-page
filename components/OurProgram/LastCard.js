import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LastCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="lastCard" data-aos="fade-up" data-aos-duration="1000">
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
