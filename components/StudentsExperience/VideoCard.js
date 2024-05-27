import React, { useState } from "react";
import SingleVideoCard from "./SingleVideoCard";
import LessThen from "../SVG/LessThen";

const VideoCard = () => {
  const [playing, isPlaying] = useState(true);
  const videos = [
    {
      url: "https://player.vimeo.com/video/926785132?h=1f51fef31c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "1",
    },
    {
      url: "https://player.vimeo.com/video/926990535?h=a15a1b73f3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "2",
    },
    {
      url: "https://player.vimeo.com/video/926779712?h=e174f8f21c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "3",
    },
    {
      url: "https://player.vimeo.com/video/927015929?h=1c3232c72c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "4",
    },
    {
      url: "https://player.vimeo.com/video/926998311?h=f56ca873af&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "5",
    },
    {
      url: "https://player.vimeo.com/video/927003712?h=86271e6086&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "6",
    },
  ];
  return (
    <section className="videos_card">
      {videos.map((video, index) => (
        <SingleVideoCard
          key={index}
          url={video.url}
          id={video.id}
          //   isPlaying={isPlaying}
          //   playing={playing}
        />
      ))}
    </section>
  );
};

export default VideoCard;
