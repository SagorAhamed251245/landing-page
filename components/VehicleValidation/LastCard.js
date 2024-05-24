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
        <img src="/images/svg/leady.png" />
      </div>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <img src="/images/svg/leady.png" />
      </div>
    </div>
  );
};

export default LastCard;
