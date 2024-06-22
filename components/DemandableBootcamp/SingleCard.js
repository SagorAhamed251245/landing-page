import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCard = ({ bootCamp }) => {
  const {
    course,
    image,
    timeLength,
    averageRating,
    totalRatings,
    offerPrice,
    price,
  } = bootCamp;

  return (
    <div className="single_card">
      <div className="single_card_img">
        <Image height={219} width={361} src={image} alt="single card image" />
      </div>
      <div className="single_card_info">
        <div className="div_1">
          <h4>{course}</h4>
          <div className="">
            <p>Total hours: {timeLength}+h Video Lectures</p>
            <p>
              {averageRating}
              <span style={{ display: "flex", alignItems: "center" }}>
                {/* <section className="new_starts_class">
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                </section> */}
                <Image
                  height={30}
                  width={150}
                  src="/images/svg/stars.png"
                  alt="star image"
                  className="new_starts_class"
                />
              </span>
              <span>#({totalRatings})</span>
            </p>
          </div>

          <div className="div_2">
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
