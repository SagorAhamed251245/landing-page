import React from "react";

const SingleSwiperCard = ({ url }) => {
  return (
    <div className="single-swiper-card">
      <img
        height="auto"
        width="auto"
        loading="lazy"
        src={url}
        alt="Company Logo"
      />
    </div>
  );
};

export default SingleSwiperCard;
