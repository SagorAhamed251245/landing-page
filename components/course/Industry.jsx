import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";


const Industry = ({ bootcamp }) => {
  return (
    <div className="industry">
      <div className="">
        <h4>{bootcamp?.alumni?.title}</h4>

        <div className="hr">
          <hr />
        </div>

        <div className="image-container">
          <Marquee
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            {bootcamp?.alumni?.images?.map((item, i) => (
              <Image key={i} width={200} height={100} src={item} alt="slider" />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Industry;
