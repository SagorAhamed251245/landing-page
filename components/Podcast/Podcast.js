import React from "react";
import PodcastCard from "./PodcastCard";
import LessThen from "../SVG/LessThen";

const Podcast = () => {
  return (
    <section className="podcast">
      <div>
        <h1
          style={{ textAlign: "center", marginBottom: "60px" }}
          className="title"
        >
          Podcast of TS4U's Innovative Bootcamp
        </h1>
        <PodcastCard />

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

export default Podcast;
