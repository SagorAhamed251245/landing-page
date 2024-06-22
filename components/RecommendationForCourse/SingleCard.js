import React from "react";
import Vector from "../SVG/Vector";
import Image from "next/image";

const SingleCard = ({ name, review, image }) => {
  return (
    <div className="recommendation_card">
      {/* user info */}

      <div className="user_info">
        <img
          loading="lazy"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          src={image}
        />
        <div className="div">
          <div>
            <p style={{ fontWeight: "800" }} className="user_name">
              {name}
            </p>
            <p className="p">Students of TS4U</p>
          </div>
        </div>
      </div>
      {/* reviews */}
      <p className="p1">Recommended</p>
      <div className="reviews">
        <p style={{ marginTop: "20px" }}>{review}</p>
        {/* ratings */}

        {/* <span className="new_starts_class">
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
          <FaStar color="#ef7817" />
        </span> */}
        <Image
          height={30}
          width={150}
          src="/images/svg/stars.svg"
          alt="star image"
          className="new_starts_class"
        />
      </div>

      <Vector color={"#0065FF"} />
      <div className="ab_image">
        <Image
          height={80}
          width={80}
          alt="cotation"
          src="/images/svg/cotation.svg"
        />
      </div>
    </div>
  );
};

export default SingleCard;
