import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SingleVideoCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="single_video" data-aos="fade-right" data-aos-duration="1000">
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
          src="https://www.youtube.com/embed/k7PDCIxEirE?si=oVohkQf3ki6omxcZ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video_relative"></div>
    </div>
  );
};

export default SingleVideoCard;
