import React from "react";
import DemandableBootcampCard from "./DemandableBootcampCard";

const DemandableBootcamp = () => {
  return (
    <section className="demandable_bootcamp ">
      <div className="demand-text">
        <h4 className="title" style={{marginBottom:"20px"}}>Most Demandable Bootcamps</h4>
        <p>
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
