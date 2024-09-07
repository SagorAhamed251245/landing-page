import React, { useEffect } from "react";
import FounderInfo from "./FounderInfo";
import ReviewAboutFounder from "./ReviewAboutFounder";
import AOS from "aos";
import "aos/dist/aos.css";

const OurFounder = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="our_founder_section">
      <h4 className="title" style={{ textAlign: "center" }} data-aos="fade-up" data-aos-duration="1000">
        Meet Our Founder
        <hr style={{ width: "20%", margin: "0 auto", marginTop: "10px" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150"/>
      </h4>

      <div className="container">
        <FounderInfo />
        <ReviewAboutFounder />
      </div>
    </section>
  );
};

export default OurFounder;
