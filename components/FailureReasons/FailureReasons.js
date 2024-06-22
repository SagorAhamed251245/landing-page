import React from "react";
import TextComponent from "./TextComponent";
import LessThen from "../SVG/LessThen";

const FailureReasons = () => {
  let a =
    "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg";
  const surroundingImages = [a, a, a, a, a, a, a, a];
  return (
    <section className="failure_reasons container">
      <button className="book_a_meeting_mobile ">
        Book a meeting
        <span>
          <LessThen color={"white"} />
        </span>
      </button>
      <div className="cercel_img">
        <img
          loading="lazy"
          height="auto"
          width="auto"
          src="/images/svg/Group 1171283242.png"
        />
      </div>

      <div>
        <TextComponent />
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <img
          loading="lazy"
          height="auto"
          width="auto"
          className="failImg"
          src="/images/svg/fail.jpg"
        />
      </div>
    </section>
  );
};

export default FailureReasons;
