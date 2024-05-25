import React from "react";
import Comments from "../SVG/Comments";
import Liked from "../SVG/Liked";
import Views from "../SVG/Views";

const Cards = ({ img, review }) => {
  return (
    <div className="latest_news_card">
      <img src={img} />

      <div className="div">
        <div className="div2">
          <p>
            <Views />
            <span>500 views</span>
          </p>
          <p>
            <Liked /> <span>200 Liked</span>
          </p>
          <p>
            <Comments /> <span>200 Comments</span>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="/images/svg/active.svg" />
        </div>
        <p style={{ marginTop: "15px", fontWeight: "bold", fontSize: "14px" }}>
          {review}
        </p>
      </div>
    </div>
  );
};

export default Cards;
