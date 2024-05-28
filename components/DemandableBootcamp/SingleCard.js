import React from "react";

const SingleCard = ({ bootCamp }) => {
  const {
    course,
    image,
    timeLength,
    averageRating,
    totalRatings,
    offerPrice,
    price,
  } = bootCamp;

  return (
    <div className="single_card">
      <div className="single_card_img">
        <img src={image} />
      </div>
      <div className="single_card_info">
        <div className="div_1">
          <h4>{course}</h4>
          <p>Total hours: {timeLength}+h Video Lectures</p>
          <p>
            {averageRating}
            <span style={{ display: "flex", alignItems: "center" }}>
              <img src="/images/svg/stars.svg" />
            </span>
            <span>#({totalRatings})</span>
          </p>
          <div className="div_2">
            <p>
              ${offerPrice} <span>${price}</span>
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
