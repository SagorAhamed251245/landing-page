import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SingleVideoCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="single_video" data-aos="fade-right" data-aos-duration="1000">
      <div className="div">
      <img
       src={"https://www.bootcampshub.ai/_next/image?url=https%3A%2F%2Fts4uportal-all-files-upload.nyc3.digitaloceanspaces.com%2Fprogram-image%2F1666179067143-Agile-PO.jpg&w=1080&q=75"}
       alt="courses"
      style={{objectFit:"contain",width:"100%",height:"100%"}}
       
       />
      </div>
      <div className="video_relative"></div>
    </div>
  );
};

export default SingleVideoCard;
