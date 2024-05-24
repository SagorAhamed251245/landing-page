import React from "react";

const LastCard = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "550px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div className="single_card">
          <div className="single_card_img">
            <img src="https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg" />
          </div>
          <div className="single_card_info">
            <div className="div_1">
              <h4>AWS CloudOps Engineer</h4>
              <p>Total hours: 100+h Video Lectures</p>
              <p>
                5.0
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img src="/images/svg/stars.svg" />
                </span>{" "}
                <span>(#0,765)</span>
              </p>
              <div className="div_2">
                <p>
                  $10.50 <span>$50.50</span>
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <img src="/images/svg/leady.png" />
      </div>
    </div>
  );
};

export default LastCard;
