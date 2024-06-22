import SingleVideo from "./SingleVideo";

const RecommendationVideos = ({ recommendationVideos }) => {
  return (
    <div className="recommendation_videos">
      {recommendationVideos?.map((video, index) => (
        <SingleVideo id={index} url={video.url} key={index} />
      ))}
    </div>
  );
};

export default RecommendationVideos;
