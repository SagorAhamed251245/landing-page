import React from "react";
import DemandableBootcampCard from "./DemandableBootcampCard";

const DemandableBootcamp = () => {
  return (
    <section className="demandable_bootcamp ">
      <div style={{ textAlign: "center" }}>
        <h4 className="title">Most Demandable Bootcamps</h4>
        <p style={{ width: "40%", margin: "20px auto 30px auto" }}>
          Recommended bootcamps offer comprehensive and high-quality programs
          designed to equip students with in-demand skills for today's job
          market.
        </p>
      </div>
      <div className="container">
        <DemandableBootcampCard />
      </div>
    </section>
  );
};

export default DemandableBootcamp;
