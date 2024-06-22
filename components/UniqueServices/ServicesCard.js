import React from "react";
import Vector from "../SVG/Vector";
import Image from "next/image";

const ServicesCard = ({ i, url, text, classNames }) => {
  const position = (i !== 0 && i % 2) === 1 ? "down" : "up";

  const sectionStyle = position === "down" ? { marginTop: "25px" } : {};

  return (
    <section className={`service_card ${classNames}`} style={sectionStyle}>
      <>
        <div>
          <Image
            height={80}
            width={80}
            className="unique_icons"
            src={url}
            alt={`Service ${i}`}
          />
        </div>
        <p>{text}</p>

        <Vector
          color={i === 0 ? "#0065FF" : "#C0D1FE"}
          classNames="large-vector"
        />

        <Vector
          size={"35"}
          color={i === 0 ? "#0065FF" : "#C0D1FE"}
          classNames="mobile-vector"
        />
      </>
    </section>
  );
};

export default ServicesCard;
