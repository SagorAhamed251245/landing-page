import React from "react";

const LastCard = () => {
  return (
    <div className="lastCard">
      <div className="lastCard_div1">
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
      <div className="div">
        <div>
          <iframe
            id="founder"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            className="video"
            src="https://www.youtube.com/embed/lpvYygW9Cq8?si=jeVIaVZIxz34qCjA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LastCard;
