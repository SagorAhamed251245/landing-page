import React, { useState } from "react";

import { useRouter } from "next/router";
import axios from "axios";
import { Divider, message } from "antd";
import { FaRegCirclePlay, FaRegPenToSquare } from "react-icons/fa6";
import { FaStar, FaStarOfLife } from "react-icons/fa";
import { MdAssignment, MdPlayLesson } from "react-icons/md";
import { PiCertificateBold, PiStudent } from "react-icons/pi";
import MessagePreview from "./MessagePreview";

const Description = ({ bootcamp, studentCount, review, totalLesson }) => {
  const [showMore, setShowMore] = useState(false);
  const Router = useRouter();
  // Function to toggle the "See More" button
 
  // const {  isAuthenticated } = useSelector((state) => state.auth);
  const isAuthenticated =  false
  // Calculate the number of lines to display
  const maxLines = showMore ? undefined : 4;

  // Style for truncated text (optional)
  const truncatedStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 20,
  };

  const enrollNow = (course) => {
    if (course.type === "program") {
      return Router.push(`https://www.bootcampshub.ai/enroll/${course?.slug}`);
    }

    axios
      .post("/order/create", { course: course._id })
      .then((res) => {
        if (course.type === "course") {
          Router.push(
            `${process.env.NEXT_PUBLIC_REDIRECT_URL}/dashboard/program/my-purchased-items`
          );
        }
        if (course.type === "interview") {
          Router.push(
            `${process.env.NEXT_PUBLIC_REDIRECT_URL}/dashboard/program/my-purchased-items`
          );
        }
        if (course.type === "professional-service") {
          Router.push(
            `${process.env.NEXT_PUBLIC_REDIRECT_URL}/dashboard/program/my-purchased-items`
          );
        }

        message.success("Ordered Successfully");
      })
      .catch((err) => {
        console.log(err);
        err && err.response && message.error(err?.response?.data?.error);
      });
  };

  return (
    <div className="description-root">
      <div className="container">
        <div className="description-body ">
          <h2>Description</h2>
          {bootcamp?.description && (
            <div
              className="content_details"
              style={maxLines ? truncatedStyle : {}}
              data-color-mode="light"
            >
              <MessagePreview
                text={bootcamp?.description?.slice(0, 900)}
              ></MessagePreview>
            </div>
          )}
          {/* Conditionally render the "See More" button */}
          {/* <button className="description-btn" onClick={toggleDescription}>
            {showMore ? "See Less" : "See More"}
          </button> */}
        </div>
        <div className="course_preview_container">
          <div className="course_preview">
            <div className="preview_container">
              <div className="preview_wrapper">
                <div className="price_div">
                  {/* <Image
              width={1080}
              height={720}
                    src={bootcamp.image || "/placeholder2.jpg"}
                    alt="thumbnail"
                  /> */}

                  <div className="price_container">
                    <p className="item_value">
                      {bootcamp?.price?.isFree ? (
                        "Free"
                      ) : bootcamp?.price?.cost?.salePrice > 0 ? (
                        <>
                          ${bootcamp?.price?.cost?.salePrice}
                          <del className="old_price">
                            ${bootcamp?.price?.cost?.price}
                          </del>
                        </>
                      ) : (
                        <>${bootcamp?.price?.cost?.price}</>
                      )}
                    </p>
                  </div>
                </div>

                <Divider my="md" />
                <h3 className="card_heading">This Course Includes:</h3>
                <div className="preview_details">
                  <div className="preview_item">
                    <FaRegCirclePlay />
                    <p className="item_name">100+ hours Lectures</p>
                  </div>
                  <div className="preview_item">
                    <FaRegPenToSquare />
                    <p className="item_name">
                      Instructor:{" "}
                      <span>{bootcamp?.instructor?.name || "N/A"}</span>
                    </p>
                  </div>
                  <div className="preview_item">
                    <MdAssignment />
                    <p className="item_name">Assignment (300+)</p>
                  </div>
                  <div className="preview_item">
                    <FaStar />
                    <p className="item_name">
                      Rating{" "}
                      {/* <AiFillStar className="star" />
                        <AiFillStar className="star" />
                        <AiFillStar className="star" />
                        <AiFillStar className="star" />
                        <AiFillStar className="star" />  */}
                      ({review?.totalReviews})
                    </p>
                  </div>
                  <div className="preview_item">
                    <MdPlayLesson />
                    <p className="item_name">Lesson ({totalLesson})</p>
                  </div>
                  <div className="preview_item">
                    <PiStudent />
                    <p className="item_name">Student ({studentCount})</p>
                  </div>
                  <div className="preview_item">
                    <FaStarOfLife />
                    <p className="item_name">Lifetime Access</p>
                  </div>
                  <div className="preview_item">
                    <PiCertificateBold />

                    <p className="item_name">Certificate of completion</p>
                  </div>
                  {
                    <>
                      { (
                        <button
                          onClick={() => enrollNow(bootcamp)}
                          className="course_button"
                        >
                          {bootcamp?.type === "program" ? "Enroll" : "Add"}
                        </button>
                      )}

                      <button
                        onClick={() =>
                          Router.push(`https://www.bootcampshub.ai/enrollment-test/${bootcamp?._id}`)
                        }
                        style={{
                          marginTop: "20px",
                        }}
                        className="course_button"
                      >
                        Enrollment Test
                      </button>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
