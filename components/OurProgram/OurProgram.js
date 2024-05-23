import React from "react";
import FirstCard from "./FirstCard";
import SecCard from "./SecCard";
import LastCard from "./LastCard";

const OurProgram = () => {
  return (
    <>
      <h4 className="title" style={{ margin: "120px 0", textAlign: "center" }}>
        Our Program
      </h4>
      <section className="our_program ">
        <div className="container our_program_cards">
          <FirstCard />
          <SecCard />
          <LastCard />
        </div>
      </section>
      ;
    </>
  );
};

export default OurProgram;
