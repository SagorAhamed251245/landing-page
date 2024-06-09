import React from "react";
import DemandableBootcampCard from "../DemandableBootcamp/DemandableBootcampCard";
import Link from "next/link";
import LessThen from "../SVG/LessThen";

const FreeCourses = () => {
  let bootCamps = [
    {
      course: "Practical AWS CloudOps Crash Course",
      image: "https://www.schoolshub.ai/placeholder2.jpg",
      timeLength: "104",
      averageRating: 5,
      totalRatings: "50+ Students",
      offerPrice: "",
      price: "",
    },
    {
      course: "5 Hours Practical QA Crash Course",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481098318-Software-Qualit",
      timeLength: "108",
      averageRating: 5,
      totalRatings: "40+ Students",
      offerPrice: "",
      price: "",
    },
    {
      course: "3 Hours Spoken English",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1662310598685-english-lesson.",
      timeLength: "103",
      averageRating: 5,
      totalRatings: "30+ Students",
      offerPrice: "",
      price: "",
    },
    {
      course: "Flex-Product Manager",
      image: "https://www.schoolshub.ai/placeholder2.jpg",
      timeLength: "107",
      averageRating: 5,
      totalRatings: "40+ Students",
      offerPrice: "",
      price: "",
    },
  ];
  return (
    <div>
      <section className="demandable_bootcamp ">
        <div className="demand-text" style={{ textAlign: "center" }}>
          <h4 className="title" style={{ marginBottom: "20px" }}>
            Our Free Courses
          </h4>
          <p></p>
        </div>
        <div className="container">
          <DemandableBootcampCard bootCamps={bootCamps} />
        </div>
        <Link
          target="_blank"
          className="linkBtn center_btn"
          href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
        >
          <button className="book_a_meeting_btn">
            Book a meeting
            <span>
              <LessThen color={"white"} />
            </span>
          </button>
        </Link>
      </section>
    </div>
  );
};

export default FreeCourses;
