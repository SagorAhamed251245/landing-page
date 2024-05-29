import SingleVideo from "./SingleVideo";

const RecommendationVideos = ({ recommendationVideos }) => {
  return (
    <div className="recommendation_videos">
      {recommendationVideos?.map((video, index) => (
        <SingleVideo id={index} url={video.url} />
      ))}
    </div>
  );
};

export default RecommendationVideos;
