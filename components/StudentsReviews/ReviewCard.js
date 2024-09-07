import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewCard = ({ review, name, image, platform }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="review_card" data-aos="zoom-in" data-aos-duration="1000">
      {/* user info */}

      <div className="user_info">
        <Image
          loading="lazy"
          height={30}
          width={30}
          alt="user image"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          src={image}
        />
        <div className="div">
          <div data-aos="flip-left" data-aos-duration="1000">
            <p className="user_name">{name}</p>
            <p className="p">Student of TS4U</p>
            <p className="p">{platform}</p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            <Image
              loading="lazy"
              height={80}
              width={80}
              alt="cotation"
              src="/images/svg/cotation.svg"
            />
          </div>
        </div>
      </div>
      {/* reviews */}

      <div className="reviews">
        <p style={{ marginTop: "20px" }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">{review}</p>

        <Image
          loading="lazy"
          height={30}
          width={150}
          src="/images/svg/stars.png"
          alt="star image"
          className="new_starts_class"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
