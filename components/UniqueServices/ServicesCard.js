import React, { useEffect } from "react";
import Vector from "../SVG/Vector";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesCard = ({ i, url, text, classNames }) => {
  const position = (i !== 0 && i % 2) === 1 ? "down" : "up";

  const sectionStyle = position === "down" ? { marginTop: "25px" } : {};
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={`service_card ${classNames}`} style={sectionStyle} data-aos="fade-up" data-aos-duration="1000">
      <>
        <div>
          <Image
            loading="lazy"
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
