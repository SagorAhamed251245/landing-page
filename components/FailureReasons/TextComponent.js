import React from "react";
import LessThen from "../SVG/LessThen";
import Link from "next/link";

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
        <h4 className="title">
          Bootcamp Students <br /> Failure Reasons
        </h4>
        <p style={{ width: "90%", margin: "30px 0" }}>
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
                <img loading="lazy" src="/images/svg/tick-circle.svg" />
              </span>
              <span> {item}</span>
            </p>
          ))}
          <Link
            target="_blank"
            className="linkBtn"
            href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
          >
            <button className="book_a_meeting mb_hidden">
              Book a meeting
              <span>
                <LessThen color={"white"} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TextComponent;
