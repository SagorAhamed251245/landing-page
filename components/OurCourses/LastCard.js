import React from "react";

const LastCard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        paddingRight: "120px",
        position: "relative",
      }}
    >
      <img src="/images/svg/leady.png" />
      <div
        style={{
          width: "300px",
          height: " 300px",
          backgroundColor: "#FFC700",
          position: "absolute",
          left: "30%",
          zIndex: "-1",
          bottom: "-70px",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};

export default LastCard;
