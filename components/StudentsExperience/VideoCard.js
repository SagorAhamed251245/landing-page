import React, { useState } from "react";
import SingleVideoCard from "./SingleVideoCard";
import LessThen from "../SVG/LessThen";

const VideoCard = ({ videos }) => {
  const [playing, isPlaying] = useState(true);

  return (
    <section className="videos_card">
      {videos?.map((video, index) => (
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
