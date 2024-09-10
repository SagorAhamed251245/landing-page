import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SecCard = () => {
  const features = [
    "Student Enrolled 300+",
    "Hours Video Lectures 100+",
    "Project 20+",
    "Months 6+",
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      style={{
        color: "black",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="aws_title">
        <h4 className="title" data-aos="fade-up" data-aos-duration="1000">
          MERN+AWS DevOps and <br /> CloudOps Engineer
        </h4>
        <p className="p_aws" data-aos="fade-up" data-aos-duration="1000">
          Become an AWS CloudOps Engineer in just 7 to 9 months! No prior
          programming experience needed. Dive into hands-on projects and
          enterprise applications. Work in an agile scrum setup and collaborate
          in a real-world environment. Earn $120k to $200k yearly in the USA.
          Your dream AWS CloudOps job awaits!
        </p>
        <div className="features">
          {features.map((item, index) => (
            <p data-aos="fade-right" data-aos-duration="1000"
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
                    stroke="#866BF4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                    stroke="#866BF4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span> {item}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecCard;
