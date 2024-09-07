import SingleVideoCard from "./SingleVideoCard";
import LessThen from "../SVG/LessThen";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
      <Link data-aos="flip-left" data-aos-duration="1200"
        target="_blank"
        className="linkBtn center_btn"
        href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
      >
        <button className="book_a_Video_meeting_btn  center">
          Book a meeting
          <span>
            <LessThen color={"white"} />
          </span>
        </button>
      </Link>
    </>
  );
};

export default VideoCard;
