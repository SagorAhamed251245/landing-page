import React from 'react';
import SuccessfulCard from './SuccessfulCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from '../DemandableBootcamp/SwiperNavButtons ';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode } from "swiper/modules";


const SuccessfulStudents = () => {

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
      <section style={{marginBottom:"120px"}} className='successful-students container'>

        <div style={{marginBottom:"60px",marginTop:"80px"}} className='next-career'>
            <h1 style={{marginBottom:"20px"}} className='title'>Successful Students</h1>
            <p>
            Successful students exhibit several key characteristics that contribute to their achievements.
            </p>
        </div>
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[FreeMode]}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
               <SuccessfulCard id={video.id} url={video.url}/>
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>

          
        
      </section>
    );
};

export default SuccessfulStudents;