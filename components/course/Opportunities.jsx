import React from "react";

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import MessagePreview from "./MessagePreview";

const Opportunities = ({ opportunities, index }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="opportunities">
      <div className="wrapper container">
        <div className={`left ${index % 2 === 0 && !isMobile ? "order2" : ""}`}>
          <h2 className="nextCareerText">{opportunities?.title}</h2>
          <p className="descs nextCareerText">
            <MessagePreview text={opportunities?.description}></MessagePreview>
          </p>
        </div>

        <div className={`right ${isMobile ? "order2" : ""}`}>
          <Image
            width={1080}
            height={720}
            src="/Rectangle 41581.svg"
            alt="slider icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
