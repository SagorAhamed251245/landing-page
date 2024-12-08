import DemandableBootcampCard from "../DemandableBootcamp/DemandableBootcampCard";

import BookMeetingModal from "../Common/Book_Meeting_Modal/BookMeetingModal";

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

  return (
    <div>
      <section className="demandable_bootcamp ">
        <div className="demand-text" style={{ textAlign: "center" }}>
          <h4
            className="title"
            style={{ marginBottom: "20px" }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Free Courses
          </h4>
          <p></p>
        </div>
        <div className="container">
          <DemandableBootcampCard bootCamps={bootCamps} />
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BookMeetingModal />
        </div>
      </section>
    </div>
  );
};

export default FreeCourses;
