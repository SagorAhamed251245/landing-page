import React from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import MessagePreview from "./MessagePreview";

const ObtainCertification = ({ obtainCertification, index }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div style={{ backgroundColor: "#f5f5f5" }} className="recognition-section">
      <div className="recognition-container container">
        <div className={`left ${index % 2 === 0 && !isMobile ? "order2" : ""}`}>
          <h2>{obtainCertification?.title}</h2>
          <div>
            <MessagePreview
              text={obtainCertification?.description}
            ></MessagePreview>
          </div>
        </div>
        <div className={`right ${isMobile ? "order2" : ""}`}>
          <Image
            width={1080}
            height={720}
            src="/obtain-certifications.png"
            alt="Recognition"
          />
        </div>
      </div>
    </div>
  );
};

export default ObtainCertification;
