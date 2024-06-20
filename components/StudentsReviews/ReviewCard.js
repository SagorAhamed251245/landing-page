import React from "react";
import Vector from "../SVG/Vector";

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
            <img
              height="auto"
              width="auto"
              loading="lazy"
              src="/images/svg/cotation.svg"
            />
          </div>
        </div>
      </div>
      {/* reviews */}

      <div className="reviews">
        <p style={{ marginTop: "20px" }}>{review}</p>
        {/* ratings */}

        <img
          loading="lazy"
          src="/images/svg/stars.svg"
          style={{ width: "150px" }}
        />
      </div>
    </div>
  );
};

export default ReviewCard;
