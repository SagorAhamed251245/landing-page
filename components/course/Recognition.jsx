import React from "react";

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import MessagePreview from "./MessagePreview";

const Recognition = ({ data, index }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="recognition-section">
      <div className="recognition-container container">
        <div className={`left ${index % 2 === 0 && !isMobile ? "order2" : ""}`}>
          <h2>{data?.title}</h2>
          <div style={{ color: "red" }}>
            <MessagePreview text={data?.description}></MessagePreview>
          </div>
        </div>

        <div className={`right ${isMobile ? "order2" : ""}`}>
          <Image
            width={1080}
            height={720}
            src="/recognition.png"
            alt="recognition"
          />
        </div>
      </div>
    </div>
  );
};

export default Recognition;
