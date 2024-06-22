import React from "react";

const SecCard = () => {
  let features = [
    "Student Enrolled 300+",
    "Hours Video Lectures 100+",
    "Project 20+",
    "Months 6+",
  ];
  return (
    <section
      className="sec_card_section"
      style={{ color: "black", display: "flex", alignItems: "center" }}
    >
      <div>
        <h4 className="title">
          Flex MERN Full-Stack <br /> Software Engineer
        </h4>
        <p className="sec_card_p">
          Embark on a 7-9 month journey to mastery as a MERN Full-Stack Software
          Engineer! Dive into hands-on learning, Agile Scrum projects, and
          mentorship in a virtual environment. Build enterprise-grade apps, earn
          $120K-$250K yearly, and step into a promising IT career!
        </p>
        <div className="features">
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
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                    stroke="black"
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
