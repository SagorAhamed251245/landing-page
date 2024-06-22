import React from "react";
import Vector from "../SVG/Vector";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review, name, image, platform }) => {
  return (
    <div className="review_card">
      {/* user info */}

      <div className="user_info">
        <img
          loading="lazy"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          src={image}
        />
        <div className="div">
          <div>
            <p className="user_name">{name}</p>
            <p className="p">Student of TS4U</p>
            <p className="p">{platform}</p>
          </div>
          <div>
            <Image
              height={80}
              width={80}
              loading="lazy"
              alt="cotation"
              src="/images/svg/cotation.svg"
            />
          </div>
        </div>
      </div>
      {/* reviews */}

      <div className="reviews">
        <p style={{ marginTop: "20px" }}>{review}</p>
        {/* ratings */}

        <section className="new_starts_class">
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
        </section>
      </div>
    </div>
  );
};

export default ReviewCard;
