import React from "react";
import DemandableBootcampCard from "./DemandableBootcampCard";
import Link from "next/link";
import LessThen from "../SVG/LessThen";

const DemandableBootcamp = () => {
  const bootCamps = [
    {
      course: "Flex: MERN Full-Stack Software Engineer",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481726898-MERN-Full-Stack",
      timeLength: "105",
      averageRating: 5,
      totalRatings: "50+",
    },
    {
      course: "Flex: Software Quality Automation Engineer",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481098318-Software-Qualit",
      timeLength: "103",
      averageRating: 5,
      totalRatings: "50+",
    },
    {
      course: "Flex: AWS DevOps and CloudOps Engineer",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481420303-AWS-Thumbnail.j",
      timeLength: "107",
      averageRating: 5,
      totalRatings: "50+",
    },
    {
      course: "Flex-Product Manager",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1666179067143-Agile-PO.jpg",
      timeLength: "102",
      averageRating: 4.5,
      totalRatings: "50+",
    },
  ];
  return (
    <section className="demandable_bootcamp ">
      <div className="demand-text">
        <h4 className="title" style={{ marginBottom: "20px" }}>
          Most Demandable Bootcamps
        </h4>
        <p>
          Recommended bootcamps offer comprehensive and high-quality programs
          designed to equip students with in-demand skills for todays job
          market.
        </p>
      </div>
      <div className="container">
        <DemandableBootcampCard bootCamps={bootCamps} />
      </div>
      <Link
        target="_blank"
        className="linkBtn center_btn"
        href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
      >
        <button className="book_a_meeting">
          Book a meeting
          <span>
            <LessThen color={"white"} />
          </span>
        </button>
      </Link>
    </section>
  );
};

export default DemandableBootcamp;
