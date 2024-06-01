import React from "react";
import Comments from "../SVG/Comments";
import Liked from "../SVG/Liked";
import Views from "../SVG/Views";

const Cards = ({ img, review }) => {
  return (
    <div className="latest_news_card">
      <div className="img_card">
        <img src={img} />
      </div>

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
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="blog_user"
        >
          <img src="/images/svg/active.svg" />

          {/*  <div>
            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" />
          </div>
          <div>
            <p>
              shibluahmad <span>Read More</span>
            </p>
          </div> */}
        </div>
        <p className="news_p">{review}</p>
      </div>
    </div>
  );
};

export default Cards;
