import React from "react";
import Intro from "./Intro";
import VideoCard from "./VideoCard";
import Link from "next/link";
import LessThen from "../SVG/LessThen";

const StudentsExperience = () => {
  return (
    <section style={{ marginTop: "120px" }} className="container">
      <div className="students_experience">
        <Intro />
        <VideoCard />
        <Link
          target="_blank"
          className="linkBtn center_btn"
          href={"https://calendly.com/ts4u"}
        >
          <button className="book_a_meeting_btn">
            Book a meeting
            <span>
              <LessThen color={"white"} />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default StudentsExperience;
