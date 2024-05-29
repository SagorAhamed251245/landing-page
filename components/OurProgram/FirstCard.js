import React from "react";

const FirstCard = () => {
  return (
    <div className="first_card">
      <div className="single_card_img">
        <img src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481098318-Software-Qualit" />
      </div>
      <div className="single_card_info">
        <div className="div_1">
          <h4>Flex: Software Quality Automation Engineer</h4>
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
  );
};

export default FirstCard;
