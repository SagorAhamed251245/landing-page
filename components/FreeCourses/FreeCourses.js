import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DemandableBootcampCard from "../DemandableBootcamp/DemandableBootcampCard";
import Link from "next/link";
import LessThen from "../SVG/LessThen";

const FreeCourses = () => {
  const bootCamps = [
    {
      course: "Practical AWS CloudOps Crash Course",
      image: "/images/aws.webp",
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
      image: "/images/spokenEnglish.webp",
      timeLength: "103",
      averageRating: 5,
      totalRatings: "30+ Students",
      offerPrice: "",
      price: "",
    },
    {
      course: "Flex-Product Manager",
      image: "/images/productOwner.webp",
      timeLength: "107",
      averageRating: 5,
      totalRatings: "40+ Students",
      offerPrice: "",
      price: "",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="demandable_bootcamp ">
        <div className="demand-text" style={{ textAlign: "center" }}>
          <h4 className="title" style={{ marginBottom: "20px" }} data-aos="fade-up" data-aos-duration="1000">
            Our Free Courses
          </h4>
          <p></p>
        </div>
        <div className="container">
          <DemandableBootcampCard bootCamps={bootCamps} />
        </div>
        <Link data-aos="flip-left" data-aos-duration="1000"
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
