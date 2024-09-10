import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RightSide = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="founder_info_right">
      <div className="img_div" data-aos="fade-up" data-aos-duration="1000">
        <Image
          loading="lazy"
          src="/images/image/founder.png"
          height={500}
          width={500}
          alt="founder image"
        />
      </div>
      <div className="video_card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
        <div className="single_video">
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
              src="https://www.youtube.com/embed/twXQQu-z5uA?si=JB19pd8khwIcCs3K"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video_relative"></div>
        </div>
      </div>
      <Image
        height={200}
        width={300}
        alt="Ts4u images"
        loading="lazy"
        className="yellowVector"
        src="/images/svg/Vector 16.svg"
      />
    </div>
  );
};

export default RightSide;
