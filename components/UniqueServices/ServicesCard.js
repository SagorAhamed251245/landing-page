import React from "react";
import Vector from "../SVG/Vector";

const ServicesCard = ({ i, url, text, classNames }) => {
  const position = (i !== 0 && i % 2) === 1 ? "down" : "up";

  const sectionStyle = position === "down" ? { marginTop: "25px" } : {};

  return (
    <section className={`service_card ${classNames}`} style={sectionStyle}>
      <>
        <div>
          <img src={url} alt={`Service ${i}`} />
        </div>
        <p>{text}</p>
        <div className="large-vector">
          <Vector color={i === 0 ? "#0065FF" : "#C0D1FE"} />
        </div>
        <div className="mobile-vector">
          <Vector size={"35"} color={i === 0 ? "#0065FF" : "#C0D1FE"} />
        </div>
      </>
    </section>
  );
};

export default ServicesCard;
