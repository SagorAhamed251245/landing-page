import React from "react";

const SingleCard = ({ review, name, occupation, url }) => {
  return (
    <div className="review_card ">
      {/* user info */}
      <div className="user_info">
        <img
          loading="lazy"
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

      <div className="absolute_icons">
        <img
          height="auto"
          width="auto"
          loading="lazy"
          src="/images/svg/cotation.svg"
        />
        <svg
          width="107"
          height="80"
          viewBox="0 0 107 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="79" cy="79" r="79" fill="#FF9900" fill-opacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default SingleCard;
