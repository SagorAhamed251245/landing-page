import React from "react";
import Vector from "../SVG/Vector";

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

        <img
          loading="lazy"
          src="/images/svg/stars.svg"
          style={{ width: "150px" }}
        />
      </div>

      <Vector color={"#0065FF"} />
      <div className="ab_image">
        <img loading="lazy" src="/images/svg/cotation.svg" />
      </div>
    </div>
  );
};

export default SingleCard;
