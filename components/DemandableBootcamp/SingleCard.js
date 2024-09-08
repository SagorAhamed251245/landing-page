import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleCard = ({ bootCamp }) => {
  const { course, image, timeLength, totalRatings } = bootCamp;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="single_card" data-aos="fade-up" data-aos-duration="1000">
      <div className="single_card_img" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
        <Image
          loading="lazy"
          height={219}
          width={361}
          src={image}
          alt="single card image"
        />
      </div>
      <div className="single_card_info">
        <div className="div_1">
          <h4 data-aos="fade-right" data-aos-duration="1000">{course}</h4>
          <div className="">
            <p data-aos="fade-right" data-aos-duration="1000">Total hours: {timeLength}+h Video Lectures</p>
            <p data-aos="fade-right" data-aos-duration="1000">
              <span style={{ display: "flex", alignItems: "center" }}>
                {/* <section className="new_starts_class">
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                </section> */}
                <Image
                  loading="lazy"
                  height={30}
                  width={150}
                  src="/images/svg/stars.png"
                  alt="star image"
                  className="new_starts_class"
                />
              </span>
              <span>({totalRatings})</span>
            </p>
          </div>

          <div className="div_2" data-aos="fade-up" data-aos-duration="1000">
            {/* <p>
              {offerPrice} <span>{price}</span>
            </p> */}
            <Link
              target="_blank"
              href={
                "https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"
              }
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
