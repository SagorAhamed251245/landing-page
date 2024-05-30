import React from "react";
import VideoCard from "../StudentsExperience/VideoCard";
import LessThen from "../SVG/LessThen";
import Link from "next/link";

const ResourcesForYou = () => {
  const videos = [
    {
      url: "https://player.vimeo.com/video/855320786?h=8a49da35b6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "1",
    },
    {
      url: "https://player.vimeo.com/video/856180583?h=bf2a5ca8d4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "2",
    },
    {
      url: "https://player.vimeo.com/video/858150964?h=5ab3848847&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "3",
    },
    {
      url: "https://player.vimeo.com/video/858402561?h=40fd24e9be&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "4",
    },
    {
      url: "https://player.vimeo.com/video/851135170?h=875b804b32&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "5",
    },
    {
      url: "https://player.vimeo.com/video/856181438?h=cf12ba8901&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "6",
    },
  ];
  return (
    <section className="container">
      <h1 style={{ marginBottom: "50px" }} className="title">
        Resources For You
      </h1>
      <div className="students_experience">
        <VideoCard videos={videos} />
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
