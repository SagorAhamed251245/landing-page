import React from "react";

const SecCard = () => {
  let features = [
    "Student Enrolled 300+",
    "Hours Video Lectures 100+",
    "Project 20+",
    "Months 6+",
  ];
  return (
    <section style={{ color: "white" }}>
      <div>
        <h4 className="title">
          FrontEnd Web Developer <br /> (Java Script)
        </h4>
        <p style={{ margin: "15px 0" }}>
          Join our immersive 8 to 12-month program (depending on your chosen
          plan) and unlock the path to becoming a Full-Stack Software Engineer!
          Dive into hands-on learning, problem-solving, and enterprise-level app
          development from scratch.
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
      </div>
    </section>
  );
};

export default SecCard;
