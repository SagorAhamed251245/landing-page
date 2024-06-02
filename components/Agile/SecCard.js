import Link from "next/link";
import React from "react";
import LessThen from "../SVG/LessThen";

const SecCard = () => {
  let features = [
    "Student Enrolled 300+",
    "Hours Video Lectures 100+",
    "Project 20+",
    "Months 6+",
  ];
  return (
    <section style={{ color: "white", display: "flex", alignItems: "center" }}>
      <div className="container  ">
        <h4 className="title">Flex Agile Product Owner</h4>
        <p style={{ margin: "30px 0px", width: "70%" }}>
          Transform your career in just 5 to 7 months with our IT training
          course! Become an Agile Product Owner and lead top-notch development
          teams. Dive into hands-on learning and real-world problem-solving,
          mastering enterprise-grade applications.
        </p>
        <div className="features features_p">
          {features.map((item, index) => (
            <p
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "15px",
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span> {item}</span>
            </p>
          ))}
        </div>
        <Link
          target="_blank"
          className="linkBtn"
          href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
          style={{ textDecoration: "none" }}
        >
          <button className={"book_a_meeting_2"}>
            Book a meeting
            <span>
              <LessThen color={"#5831f0"} />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SecCard;
