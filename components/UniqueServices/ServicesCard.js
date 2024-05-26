import React from "react";
import Vector from "../SVG/Vector";

const ServicesCard = ({ i, url, text }) => {
  const position = (i !== 0 && i % 2) === 1 ? "down" : "up";

  const sectionStyle = position === "down" ? { marginTop: "25px" } : {};

  return (
    <section style={sectionStyle}>
      <div className="service_card">
        <div>
          <img src={url} alt={`Service ${i}`} />
        </div>
        <p>{text}</p>
        <Vector className="large-vector" color={i === 0 ? "#0065FF" : "#C0D1FE"} />
        <Vector size={"75"} className="mobile-vector" color={i === 0 ? "#0065FF" : "#C0D1FE"}/>
      </div>
    </section>
  );
};

export default ServicesCard;
