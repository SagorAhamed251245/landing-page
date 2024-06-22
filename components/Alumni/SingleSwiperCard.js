import React from "react";

const SingleSwiperCard = ({ url }) => {
  return (
    <div className="single-swiper-card">
      <img
        loading="lazy"
        height="auto"
        width="auto"
        src={url}
        alt="Company Logo"
      />
    </div>
  );
};

export default SingleSwiperCard;
