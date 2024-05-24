import React from 'react';
import DemandableBootcampCard from '../DemandableBootcamp/DemandableBootcampCard';

const FreeCourses = () => {
    return (
        <div>
            <section style={{marginTop:"120px"}} className="demandable_bootcamp ">
      <div style={{ textAlign: "center" }}>
        <h4 className="title">Our Free Courses</h4>
        <p style={{ width: "40%", margin: "20px auto 60px auto" }}>
          Recommended bootcamps offer comprehensive and high-quality programs
          designed to equip students with in-demand skills for today's job
          market.
        </p>
      </div>
      <div className="container">
        <DemandableBootcampCard />
      </div>
    </section>
        </div>
    );
};

export default FreeCourses;