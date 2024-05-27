import React, { useState } from "react";
import SingleVideoCard from "./SingleVideoCard";
import LessThen from "../SVG/LessThen";

const VideoCard = () => {
  const [playing, isPlaying] = useState(true);
  const videos = [
    {
      url: "https://videos.pexels.com/video-files/3700376/3700376-hd_1920_1080_25fps.mp4",
      id: "1",
    },
    {
      url: "https://videos.pexels.com/video-files/2461326/2461326-hd_1920_1080_30fps.mp4",
      id: "2",
    },
    {
      url: "https://videos.pexels.com/video-files/2895837/2895837-hd_1920_1080_30fps.mp4",
      id: "3",
    },
    {
      url: "https://videos.pexels.com/video-files/2886841/2886841-hd_1920_1080_30fps.mp4",
      id: "4",
    },
    {
      url: "https://videos.pexels.com/video-files/2559159/2559159-hd_1920_1080_30fps.mp4",
      id: "5",
    },
    {
      url: "https://videos.pexels.com/video-files/3772809/3772809-hd_1920_1080_25fps.mp4",
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
