import React from "react";
import PodcastCard from "./PodcastCard";
import LessThen from "../SVG/LessThen";
import Link from "next/link";

const Podcast = () => {
  return (
    <section className="podcast">
      <div>
        <h4 className="title">Podcast of TS4U's Innovative Bootcamp</h4>
        <PodcastCard />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            target="_blank"
            className="linkBtn"
            href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
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

export default Podcast;
