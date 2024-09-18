import SingleVideoCard from "./SingleVideoCard";
import LessThen from "../SVG/LessThen";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BookMeetingModal from "../Common/Book_Meeting_Modal/BookMeetingModal";

const VideoCard = ({ videos }) => {
  useEffect(() => {
    AOS.init();
  }, []);
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
      <div style={{marginTop:"20px",display:"flex",justifyContent:"center"}}>
   <BookMeetingModal/>
   </div>
    </>
  );
};

export default VideoCard;
