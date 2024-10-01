import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

const JourneyForQuater = ({ program }) => {
  const [seeMore, setSeeMore] = useState(6);
  const [roadmap, setRoadMap] = useState([]);
  const [weekNo, setWeekNo] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.bootcampshub.ai/course/roadmap/find/${program?._id}`);
        setRoadMap(res?.data?.roadmap);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleSeeMore = () => {
    setSeeMore(seeMore + 6);
  };
  const handleSeeLess = () => {
    setSeeMore(6);
  };

  const handlePre = () => {
    if (weekNo > 0) {
      setWeekNo(weekNo - 1);
    }
  };

  const handleNext = () => {
    if (weekNo < roadmap?.quarters?.length - 1) {
      setWeekNo(weekNo + 1);
    }
  };

  const isMobile = useMediaQuery({
    query: "(max-width:720px)",
  });

  return (
    <>
      {roadmap?.quarters && (
        <div className="journeyForWeekSection">
          <div className=" container">
            <div className="journeyWeekTitle">
              <h2>
                Journey For Quarter-{weekNo + 1}({roadmap?.quarters?.length}{" "}
                Quarters)
              </h2>
            </div>

            {!isMobile && (
              <div className="journeyForWeekSection_cardContainer desktop">
                {roadmap?.quarters &&
                  roadmap?.quarters[`${weekNo}`]?.weeks
                    ?.slice(0, seeMore)
                    .map((topic, i) => (
                      <div key={i} className="weekCard">
                        <div>
                          <div className="week_card_element">
                            <div className="week_name">
                              <h4>Week {i + 1}</h4>
                            </div>
                            <div className="week_card_text">
                              <h3>{topic?.title}</h3>
                              <p>{topic?.description.slice(0, 90)}</p>
                            </div>
                          </div>
                        </div>
                        <div className="path_design">
                          <Image
                            width={78}
                            height={78}
                            src="https://i.ibb.co/y6TdF8v/run.png"
                            alt="path design"
                          />
                        </div>
                      </div>
                    ))}
              </div>
            )}

            {isMobile && (
              <div
                style={{ position: "relative" }}
                className="journeyForWeekSection_cardContainer"
              >
                <Swiper
                  spaceBetween={20}
                  navigation={{
                    nextEl: ".hero_slide_next",
                    prevEl: ".hero_slide_prev",
                  }}
                  autoplay={{
                    delay: 2500,
                  }}
                  modules={[Autoplay, Navigation, Pagination]}
                  className="mySwiper "
                >
                  {roadmap?.quarters &&
                    roadmap?.quarters[`${weekNo}`]?.weeks
                      ?.slice(0, seeMore)
                      .map((topic, i) => (
                        <SwiperSlide key={i}>
                          <div className="weekCard">
                            <div className="week_card_element">
                              <div className="week_name">
                                <h4>Week {i + 1}</h4>
                              </div>
                              <div className="week_card_text">
                                <h3>{topic?.title}</h3>
                                <p>{topic?.description.slice(0, 90)}</p>
                              </div>
                            </div>

                           
                          </div>
                        </SwiperSlide>
                      ))}
                </Swiper>
                <div>
                  <div className="hero_slide_next  hero_slider_navigator">
                    <svg
                      width="60"
                      height="15"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.51196 0.639648L6.80132 1.35029L9.10964 3.66365H0.959961V4.67165H9.10964L6.79628 6.98501L7.51196 7.69565L11.04 4.16765L7.51196 0.639648Z"
                        fill="#27AC1F"
                      />
                    </svg>
                  </div>
                  <div className="hero_slide_prev hero_slider_navigator">
                    <svg
                      width="60"
                      height="15"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.48804 0.639648L5.19868 1.35029L2.89036 3.66365H11.04V4.67165H2.89036L5.20372 6.98501L4.48804 7.69565L0.960039 4.16765L4.48804 0.639648Z"
                        fill="#27AC1F"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "30px",
                justifyContent: "center",
              }}
            >
              {!weekNo == 0 && roadmap?.quarters && (
                <button
                  style={{ backgroundColor: "#27ac1f1a", color: "#27ac1f" }}
                  onClick={() => handlePre()}
                  className="primary-btn-sh"
                >
                  Previous Quarter
                </button>
              )}
              {roadmap?.quarters &&
              seeMore < roadmap?.quarters[`${weekNo}`]?.weeks?.length ? (
                <button onClick={handleSeeMore} className="primary-btn-sh">
                  See More
                </button>
              ) : roadmap?.quarters &&
                roadmap?.quarters[`${weekNo}`]?.weeks?.length > 6 ? (
                <button onClick={handleSeeLess} className="primary-btn-sh">
                  See Less
                </button>
              ) : (
                ""
              )}
              {roadmap?.quarters[`${weekNo + 1}`] && roadmap?.quarters && (
                <button
                  style={{ backgroundColor: "#27ac1f1a", color: "#27ac1f" }}
                  onClick={() => handleNext()}
                  className="primary-btn-sh"
                >
                  Next Quarter
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JourneyForQuater;
