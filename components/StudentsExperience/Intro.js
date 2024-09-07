import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h4 className="title" data-aos="fade-up" data-aos-duration="1000">Students Experience At TS4U</h4>
      {/* <p className="bootcamp-p">
        Bootcamp experiences vary widely among students, but common themes
        emerge. Many report intense immersion into the subject matter, with a
        focus on practical, hands-on learning.
      </p> */}
    </div>
  );
};

export default Intro;
