import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleCard = ({ review, name, occupation, url }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="review_card " data-aos="zoom-in" data-aos-duration="1000">
      {/* user info */}
      <div className="user_info">
        <Image
          loading="lazy"
          height={30}
          width={30}
          alt="user image"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          src={url}
        />
        <div className="div">
          <div>
            <p className="user_name">{name}</p>
            <p className="p">{occupation}</p>
          </div>
          <div></div>
        </div>
      </div>
      {/* reviews */}
      <p className="p1" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="300">Recommended</p>
      <div className="reviews">
        <p style={{ marginTop: "20px" }}>{review}</p>
        {/* ratings */}

        {/*  <section className="new_starts_class">
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
        </section> */}
        <Image
          loading="lazy"
          height={30}
          width={150}
          src="/images/svg/stars.png"
          alt="star image"
          className="new_starts_class"
        />
      </div>

      <div className="absolute_icons">
        <Image
          loading="lazy"
          height={80}
          width={80}
          alt="cotation"
          src="/images/svg/cotation.svg"
        />
        <svg
          width="107"
          height="80"
          viewBox="0 0 107 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="79" cy="79" r="79" fill="#FF9900" fillOpacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default SingleCard;
