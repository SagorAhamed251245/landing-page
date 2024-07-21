import Image from "next/image";
import React from "react";

const LastCard = () => {
  return (
    <div className="last_card">
      <div className="div1">
        <Image
          height={1024}
          width={1024}
          alt="last card image"
          loading="lazy"
          className="vehImg"
          src="/images/svg/OIG1.jpg"
        />
      </div>
    </div>
  );
};

export default LastCard;
