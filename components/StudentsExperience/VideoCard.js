import SingleVideoCard from "./SingleVideoCard";

import "aos/dist/aos.css";

import BookMeetingModal from "../Common/Book_Meeting_Modal/BookMeetingModal";

const VideoCard = ({ videos }) => {
  return (
    <>
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
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <BookMeetingModal />
      </div>
    </>
  );
};

export default VideoCard;
