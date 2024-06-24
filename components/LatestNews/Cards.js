import React from "react";

import Image from "next/image";

const Cards = ({ img }) => {
  return (
    <div className="latest_news_card">
      <div className="img_card">
        <Image
          loading="lazy"
          height={382}
          width={256}
          src={img}
          alt="letes news card"
          className="img_card_img"
        />
      </div>

      {/*  <div className="div">
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
          <Image
            loading="lazy"
            height={36}
            width={302}
            src="/images/svg/active.png"
            alt="222"
          />
        </div>
        <p className="news_p">{review}</p>
      </div> */}
    </div>
  );
};

export default Cards;
