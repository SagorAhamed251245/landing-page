import React, { useState } from "react";
import SingleVideoCard from "./SingleVideoCard";
import LessThen from "../SVG/LessThen";

const VideoCard = () => {
  const [playing, isPlaying] = useState(true);
  const videos = [
    {
      url: "https://player.vimeo.com/video/856181438?h=cf12ba8901&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "1",
    },
    {
      url: "https://player.vimeo.com/video/858402012?h=cc6eedb6af&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "2",
    },
    {
      url: "https://player.vimeo.com/video/894053938?h=b59084e207&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "3",
    },
    {
      url: "https://player.vimeo.com/video/896441719?h=01d3d83751&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "4",
    },
    {
      url: "https://player.vimeo.com/video/827573223?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "5",
    },
    {
      url: "https://player.vimeo.com/video/865453366?h=8e3c78691e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
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
