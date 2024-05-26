import React from "react";
import LessThen from "../SVG/LessThen";
import Tick from "./Tick";

const LeftSide = () => {
  const experiences = [
    "Quicken Loans",
    "Fiat Chrysler",
    "Volkswagen Group of America",
    "Rackspace Headquarters",
    "VOIP based company in Singapore",
  ];
  return (
    <div className="founder_info_left">
      {/* intro */}
      <div>
        <div className="founder_contact">
          <div>
            <h4 className="title">Shiblu Ahmad</h4>
            <p className="p1">Principal, TS4U</p>
          </div>

          <button className="book_a_meeting">
            Book a call
            <span>
              <LessThen color={"white"} />
            </span>{" "}
          </button>
        </div>

        <p className="into_p">
          Hi, my name is Shiblu Ahmad, and I’m the principal at TS4U. I am a
          Bangladeshi-born American with over 20 years of experience in the IT
          Industry. I have worked at many reputable companies in the USA and
          throughout my career.
        </p>
      </div>
      {/* experiences  */}

      <div>
        {experiences.map((expe, index) => (
          <div className="experience" key={index}>
            <Tick />
            <p>{expe}</p>
          </div>
        ))}
        <p className="into_p">
          I created my own start-up in 2013 but actively started full-time in
          2020, right after the pandemic began. My aim was to transfer
          experience and share my many years of knowledge with the
          underrepresented communities around the USA who are behind in the
          corporate world...
          <span style={{ fontWeight: "bolder" }}>Read More</span>
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
