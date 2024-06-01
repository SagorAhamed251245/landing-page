import SingleCard from "./SingleCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode } from "swiper/modules";
import { SwiperNavButtons } from "../DemandableBootcamp/SwiperNavButtons ";

const ReviewAboutFounder = () => {
  let reviews = [
    {
      name: "Zuliana Zanardi",
      profile:
        "https://media.licdn.com/dms/image/D4D03AQFztSZWvEavpw/profile-displayphoto-shrink_800_800/0/1670977309888?e=1722470400&v=beta&t=jTQMQRlNqAJ4RgSYoRO7_hwGwVNw2eGXh-uOILUdAl8",
      id: 1,
      occupation: "Product manager at PSPO",
      review:
        "Shiblu is an excellent professional, intelligent, caring and empathetic. Always ready to help, he helped me several times and I'm sure he has an excellent profile to make a difference in any project he works on.",
    },
    {
      name: "Joel Waldman",
      profile:
        "https://media.licdn.com/dms/image/C4D03AQH3Lr80ONq9Wg/profile-displayphoto-shrink_200_200/0/1534272004626?e=1722470400&v=beta&t=iUQbpJ8UMcpyNW3MKwAEM6HBo_CyFouosaGFEG_mLqw",
      id: 1,
      occupation: "Analytics Leader | Blockchain Sanguine",
      review:
        "Shiblu has always been someone that pushes the bounds of what is expected and what is possible. His relentless positive energy and commitment to excellence make him an asset to any team. Having worked with Shiblu on several team projects, I can attest first hand to his infectious ability to inspire those around him and put others needs before his own. Shiblu is a joy to be around and will be successful in whatever he does!",
    },
    {
      name: "Ted Williamson",
      profile:
        "https://media.licdn.com/dms/image/D5603AQEoZx0LEamAsA/profile-displayphoto-shrink_200_200/0/1672525692027?e=1722470400&v=beta&t=m3RI1nRq7XRjYAjnzsGmiS72eZ9m1CsRcaxcQWRbrXQ",
      id: 1,
      occupation: "Senior Vice President at Integra Partners",
      review:
        "It was my honor to work with Shiblu at Quicken Loans. He is one of the hardest working people I know. He’s a great thinker- always looking for new ways to do things better while learning and sharing with others. As technologist, he is second to none, as a co worker and team mate, he can always be counted on to contribute and lead in any way he can. I highly recommend him.",
    },
    {
      name: "John Rackar",
      profile:
        "https://media.licdn.com/dms/image/C5603AQHHS3w9nDWppA/profile-displayphoto-shrink_200_200/0/1516346559595?e=1722470400&v=beta&t=z3XbyThni_izRZqy2tostGJFsNeGfPPDH2zG2pbKEfY",
      id: 1,
      occupation: "Software Engineer at QuickenLoans",
      review:
        "I worked on several projects with Shiblu and they were great experiences. He is excellent in getting people to buy into what needs to be done on a project and to keep it moving forward. He also took the time to ensure any roadblocks to moving forward were resolves as quickly as possible. He is someone I would definitely want to work with again.",
    },
  ];

  return (
    <div className="ReviewAboutFounder">
      <h4 className="title">Testimonials About Our Principal</h4>
      <div className="review_about_founder_cards mb_hidden">
        {reviews.map((review, index) => (
          <SingleCard
            key={index}
            name={review?.name}
            occupation={review?.occupation}
            url={review?.profile}
            review={review?.review}
          />
        ))}
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        // loop={true}
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
        className="mySwiper review_about_founder_cards lg_hidden"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <SingleCard
              key={index}
              name={review?.name}
              occupation={review?.occupation}
              url={review?.profile}
              review={review?.review}
            />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default ReviewAboutFounder;
