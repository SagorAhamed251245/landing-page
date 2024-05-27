import React from "react";
import VideoCard from "../StudentsExperience/VideoCard";
import LessThen from "../SVG/LessThen";
import Link from "next/link";

const ResourcesForYou = () => {
  return (
    <section className="container">
      <h1 style={{ marginBottom: "50px" }} className="title">
        Resources For You
      </h1>
      <div className="students_experience">
        <VideoCard />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            target="_blank"
            className="linkBtn"
            href="https://calendly.com/ts4u"
          >
            <button className={"book_a_meeting_1"}>
              Book a meeting
              <span>
                <LessThen color={"white"} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesForYou;
