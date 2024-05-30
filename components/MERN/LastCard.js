import Link from "next/link";
import React from "react";

const LastCard = () => {
  return (
    <div className="lastCard">
      <div className="lastCard_div1">
        <div className="single_card">
          <div className="single_card_img">
            <img src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481726898-MERN-Full-Stack" />
          </div>
          <div className="single_card_info">
            <div className="div_1">
              <h4>Flex: MERN Full-Stack Software Engineer</h4>
              <p>Total hours: 100+h Video Lectures</p>
              <p>
                5.0
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img src="/images/svg/stars.svg" />
                </span>{" "}
                <span>(50+)</span>
              </p>
              <div className="div_2">
                <p></p>
                <Link target="_blank" href={"https://calendly.com/ts4u"}>
                  <button className="button-cal">Learn More</button>
                </Link>
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
