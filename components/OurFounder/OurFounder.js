import React from "react";
import FounderInfo from "./FounderInfo";
import ReviewAboutFounder from "./ReviewAboutFounder";

const OurFounder = () => {
  return (
    <section className="our_founder_section">
      <h4 className="title" style={{ textAlign: "center" }}>
        Meet Our Founder
        <hr style={{ width: "20%", margin: "0 auto", marginTop: "10px" }} />
      </h4>

      <div className="container">
        <FounderInfo />
        <ReviewAboutFounder />
      </div>
    </section>
  );
};

export default OurFounder;
