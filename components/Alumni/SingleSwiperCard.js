import Image from "next/image";
import React from "react";

const SingleSwiperCard = ({ url }) => {
  return (
    <div className="single-swiper-card">
      <Image
        loading="lazy"
        height={50}
        width={130}
        src={url}
        alt="Company Logo"
      />
    </div>
  );
};

export default SingleSwiperCard;
