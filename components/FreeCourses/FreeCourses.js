import React from 'react';
import DemandableBootcampCard from '../DemandableBootcamp/DemandableBootcampCard';

const FreeCourses = () => {
    return (
        <div>
            <section style={{marginTop:"120px"}} className="demandable_bootcamp ">
      <div className='demand-text' style={{ textAlign: "center" }}>
        <h4 className="title" style={{marginBottom:"20px"}}>Our Free Courses</h4>
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
        </div>
    );
};

export default FreeCourses;