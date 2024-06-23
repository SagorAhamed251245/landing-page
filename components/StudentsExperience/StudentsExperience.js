import React from "react";
import Intro from "./Intro";
import VideoCard from "./VideoCard";

const StudentsExperience = () => {
  const videos = [
    {
      url: "https://player.vimeo.com/video/927015929?h=1c3232c72c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "1",
    },
    {
      url: "https://player.vimeo.com/video/927006255?h=93081ed14e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "2",
    },
    {
      url: "https://player.vimeo.com/video/927010846?h=fa6894ce55&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "3",
    },
    {
      url: "https://player.vimeo.com/video/926990535?h=a15a1b73f3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "4",
    },
    {
      url: "https://player.vimeo.com/video/927000565?h=de7f14aa2f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "5",
    },
    {
      url: "https://player.vimeo.com/video/926998311?h=f56ca873af&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "6",
    },
  ];
  return (
    <section className="container students_experience_section">
      <div className="students_experience">
        <Intro />
        <VideoCard videos={videos} />
      </div>
    </section>
  );
};

export default StudentsExperience;
