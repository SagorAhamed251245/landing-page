import React from "react";
import Intro from "./Intro";
import VideoCard from "./VideoCard";

const StudentsExperience = () => {
  return (
    <section style={{marginTop:"120px"}} className="container">
      <div className="students_experience">
        <Intro />
        <VideoCard />
      </div>
    </section>
  );
};

export default StudentsExperience;
