import React from "react";

const SingleCard = () => {
  return (
    <div className="single_card">
      <div className="single_card_img">
        <img src="https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg" />
      </div>
      <div className="single_card_info">
        <div className="div_1">
          <h4>AWS CloudOps Engineer</h4>
          <p>Total hours: 100+h Video Lectures</p>
          <p>
            5.0 <span>****</span> <span>(#0,765)</span>
          </p>
          <div className="div_2">
            <p>$10.50</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
