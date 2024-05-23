import React from "react";
import FounderInfo from "./FounderInfo";

const OurFounder = () => {
  return (
    <section className="our_founder_section">
      <h4
        className="title"
        style={{ textAlign: "center", marginBottom: "150px" }}
      >
        Meet Our Founder
        <hr style={{ width: "20%", margin: "0 auto", marginTop: "10px" }} />
      </h4>

      <div className="container">
        <FounderInfo />
      </div>
    </section>
  );
};

export default OurFounder;
