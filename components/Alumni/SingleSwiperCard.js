import React from "react";

const SingleSwiperCard = ({ url }) => {
  return (
    <div className="swiper-slide-content">
      <img src={url} alt="Company Logo" />
    </div>
  );
};

export default SingleSwiperCard;
