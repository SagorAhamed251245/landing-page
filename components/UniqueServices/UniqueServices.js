import React from 'react';
import ServicesCards from './ServicesCards';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const UniqueServices = () => {

    let slider = [
        0,1,2,3,4
    ]
    return (
        


        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            
            {
                slider.map((slider,idx) => <SwiperSlide key={idx}>  <section  className='unique_service container'>
                <div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}><img src='\images\svg\Star.svg' />
                        <p> Michigan State Approved Trainer</p>
                        <img src='\images\svg\Star.svg' />
                    </div>
                    <h4 style={{textAlign:"center", marginBottom:"60px"}} className='title'>
                        What Makes Us Unique
                    </h4>
                </div>
                <ServicesCards/>
                
            </section>
            </SwiperSlide>
            )}
       
      </Swiper>
    );
};

export default UniqueServices;