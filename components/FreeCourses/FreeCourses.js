import React from "react";
import DemandableBootcampCard from "../DemandableBootcamp/DemandableBootcampCard";

const FreeCourses = () => {
  let bootCamps = [
    {
      course: "Flex: MERN Full-Stack Software Engineer",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481726898-MERN-Full-Stack",
      timeLength: "",
      averageRating: 0,
      totalRatings: 0,
      offerPrice: 13999,
      price: 0,
    },
    {
      course: "Flex: Software Quality Automation Engineer",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481098318-Software-Qualit",
      timeLength: "",
      averageRating: 0,
      totalRatings: 0,
      offerPrice: 12999,
      price: 0,
    },
    {
      course: "Flex: AWS DevOps and CloudOps Engineer",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481420303-AWS-Thumbnail.j",
      timeLength: "",
      averageRating: 0,
      totalRatings: 0,
      offerPrice: 17000,
      price: 0,
    },
    {
      course: "Flex-Product Manager",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1666179067143-Agile-PO.jpg",
      timeLength: "",
      averageRating: 0,
      totalRatings: 0,
      offerPrice: 9999,
      price: 0,
    },
  ];
  return (
    <div>
      <section style={{ marginTop: "120px" }} className="demandable_bootcamp ">
        <div className="demand-text" style={{ textAlign: "center" }}>
          <h4 className="title" style={{ marginBottom: "20px" }}>
            Our Free Courses
          </h4>
          <p>
            Recommended bootcamps offer comprehensive and high-quality programs
            designed to equip students with in-demand skills for today's job
            market.
          </p>
        </div>
        <div className="container">
          <DemandableBootcampCard bootCamps={bootCamps} />
        </div>
      </section>
    </div>
  );
};

export default FreeCourses;
