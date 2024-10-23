import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const LastCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="last_card">
      <div className="div" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="500">
       <img
       src={"https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481726898-MERN-Full-Stack"}
       alt="courses"
      style={{objectFit:"contain",width:"100%",height:"100%"}}
       
       />
      </div>
      <div className="yellow_vector"></div>
    </div>
  );
};

export default LastCard;
