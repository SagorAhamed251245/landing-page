import React from "react";
import VideoCard from "../StudentsExperience/VideoCard";
import LessThen from "../SVG/LessThen";

const ResourcesForYou = () => {
  return (
    <section className="container">
      <h1 style={{ marginBottom: "50px" }} className="title">
        Resources For You
      </h1>
      <div className="students_experience">
        <VideoCard />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className={"book_a_meeting_1"}>
            Book a meeting
            <span>
              <LessThen color={"white"} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesForYou;
