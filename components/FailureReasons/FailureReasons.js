import React from "react";
import TextComponent from "./TextComponent";

const FailureReasons = () => {
  let a =
    "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg";
  const surroundingImages = [a, a, a, a, a, a, a, a];
  return (
    <section style={{marginTop:"120px"}} className="failure_reasons">
      <div className="cercel_img">
        <img src="/images/svg/Group 1171283242.png" />
      </div>
      <div>
      <TextComponent />
      </div>
      <div style={{ width: "371px", height: "435px" }}>
        <img src="/images/svg/leady.png" />
      </div>
    </section>
  );
};

export default FailureReasons;
