
import moment from "moment";
import { useEffect, useState } from "react";

import ReactStarsRating from "react-awesome-stars-rating";
import Image from "next/image";
import MessagePreview from "./MessagePreview";
import Navbar from "../Banner/Navbar";
// import MessagePreview from "./MessagePreview";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function secondsToHours(seconds) {
  const hours = seconds / 3600;
  if (hours >= 1) {
    return Math.floor(hours);
  } else {
    return hours.toFixed(2);
  }
}

const SingleBootcampHero = ({
  bootcamp,
  studentCount,
  totalDuration,
  course,
  review,
}) => {
  const [randomNumber, setRandomNumber] = useState(null);
  
 
  useEffect(() => {
    const randomInt = getRandomInt(100, 1000);
    setRandomNumber(randomInt);
  }, [randomNumber]);

  return (
    <div className="single-bootcamphero-root">
        <Navbar />
      <div className="single-bootcamphero container">
        <div className={`left `}>
        
          <h1 className="heading1-sh">{bootcamp?.title}</h1>
          {bootcamp?.shortDetail && (
            <div className="desc shortDescription">
              <MessagePreview
                text={bootcamp?.shortDetail?.slice(0, 100)}
              ></MessagePreview>
            </div>
          )}

          <div className="review">
           
            <ReactStarsRating
              value={review?.averageStarCount}
              isEdit={false}
              size={20}
              isHalf={true}
            ></ReactStarsRating>
            {/* <p className="reviews">({getRandomInt(100, 1000)})</p> */}
            <p className="reviews">({review?.totalReviews})</p>
            <p className="reviews">{studentCount || 0} Students</p>
          </div>

          <p className="hours">{`Total hours: ${secondsToHours(
            totalDuration || 0
          )}+h Video Lectures`}</p>
          <div className="calendar">
            <div className="items">
              <Image
                width={1080}
                height={720}
                className="img"
                src="/multischool/bootcamps/calendar.svg"
                alt="calendar"
              />
              <p>Last updated: {moment(bootcamp?.updatedAt).format("LL")}</p>
            </div>
            <div style={{ marginTop: "0px" }} className="items">
              <Image
                width={1080}
                height={720}
                style={{ width: "16px",height:"15px", margin: "auto" }}
                src="/multischool/bootcamps/global.png"
                alt="global"
              />
              <p>{bootcamp?.language}</p>
            </div>
          </div>
          <p className="creator">
            <span className="marker">Mentor:</span>{" "}
            {course?.instructor?.name || "N/A"}
          </p>
        </div>
        <div  className="right">
          <Image
            width={1080}
            height={720}
            className="imgRight"
            src={bootcamp?.image || "/placeholder2.jpg"}
            alt="Bootcamp"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleBootcampHero;
