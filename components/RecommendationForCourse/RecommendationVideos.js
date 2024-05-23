import SingleVideo from "./SingleVideo";

const RecommendationVideos = () => {
  return (
    <div className="recommendation_videos">
      <SingleVideo
        id={"1"}
        url={
          "https://videos.pexels.com/video-files/3700376/3700376-hd_1920_1080_25fps.mp4"
        }
      />
      <SingleVideo
        id={"2"}
        url={
          "https://videos.pexels.com/video-files/3700376/3700376-hd_1920_1080_25fps.mp4"
        }
      />
      <SingleVideo
        id={"3"}
        url={
          "https://videos.pexels.com/video-files/3700376/3700376-hd_1920_1080_25fps.mp4"
        }
      />
      <SingleVideo
        id={"4"}
        url={
          "https://videos.pexels.com/video-files/3700376/3700376-hd_1920_1080_25fps.mp4"
        }
      />
    </div>
  );
};

export default RecommendationVideos;
