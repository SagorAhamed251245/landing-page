import Image from "next/image";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import image from "/public/landing_page/whatYouWillLearn.png";

const WhatWillLearn = ({ bootcamp, index }) => {
  console.log(bootcamp)
  const [seeMore, setSeeMore] = useState(6);
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const handleSeeMore = () => {
    setSeeMore(seeMore + 6);
  };
  const handleSeeLess = () => {
    setSeeMore(6);
  };

  return (
    <div className="what-will-learn">
      <div className="container wrapper">
        <div className={`left ${index % 2 === 0 && !isMobile ? "order2" : ""}`}>
          <h2>What you'll learn</h2>
          <div className="learns">
            {bootcamp?.whatLearns?.slice(0, seeMore).map((item, i) => (
              <div key={i} className="single-learn">
                <Image
                  width={1080}
                  height={720}
                  src="/check-circle 4.svg"
                  alt="circle"
                />
                <p className="text">{item?.title}</p>
              </div>
            ))}
          </div>
          {bootcamp?.whatLearns?.length > 5 && (
            <div style={{ marginTop: "40px" }}>
              {seeMore < bootcamp?.whatLearns?.length ? (
                <button onClick={handleSeeMore} className="default_button">
                  See More
                </button>
              ) : (
                <button onClick={handleSeeLess} className="default_button">
                  See Less
                </button>
              )}
            </div>
          )}
        </div>

        <div className={`right ${isMobile ? "order2" : ""}`}>
          <div className="image_div">
            <Image
              width={1080}
              height={720}
              className="image"
              src={image}
              alt="What you will learn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWillLearn;
