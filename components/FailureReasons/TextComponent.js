import React from "react";

const TextComponent = () => {
  let features = [
    "Poor Time Management",
    "Insufficient Support",
    "Mismatched Expectations",
    "Personal Challenges",
    "Learning Style Compatibility",
  ];
  return (
    <section>
      <div>
        <h4 className="title">Bootcamp Students Failure Reasons</h4>
        <p>
          Some students may enter bootcamps expecting instant mastery without
          realizing the intensive effort required.
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
                <img src="/images/svg/tick-circle.svg" />
              </span>
              <span> {item}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextComponent;
