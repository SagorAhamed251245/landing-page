import SingleVideo from "./SingleVideo";

const RecommendationVideos = () => {
  return (
    <div className="recommendation_videos">
      <SingleVideo
        id={"1"}
        url={
          "https://player.vimeo.com/video/930124563?h=155d435da0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        }
      />
      <SingleVideo
        id={"2"}
        url={
          "https://player.vimeo.com/video/929766708?h=24116a86a2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        }
      />
      <SingleVideo
        id={"3"}
        url={
          "https://player.vimeo.com/video/929774286?h=45f32c67cb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        }
      />
      <SingleVideo
        id={"4"}
        url={
          "https://player.vimeo.com/video/929769118?h=debe947ba3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        }
      />
    </div>
  );
};

export default RecommendationVideos;
