import Link from "next/link";
import React from "react";
import LessThen from "../SVG/LessThen";

const NextCareer = () => {
  const nextCareer = [
    {
      title: "Career Advancement",
      description:
        "Gain the skills needed for senior, principal, and architectural positions.",
    },
    {
      title: "Leadership Preparation",
      description: "Easily transition to leadership roles.",
    },
    {
      title: "Industry Mastery",
      description: "Become an expert in the latest technologies and tools.",
    },
    {
      title: "Enhanced Communication Skills",
      description: "Improve your ability to communicate effectively.",
    },
    {
      title: "Leadership Development",
      description: "Learn how to be an effective leader in your field.",
    },
    {
      title: "Transformative Impact",
      description: "Significantly change your financial and social status.",
    },
  ];

  return (
    <section className="bootcamp_completion_container book_meeting ">
      <div style={{ gap: "40px" }} className="bootcamp_completion container">
        <div className="next-career">
          <h4 className="title">Next Career Opportunities</h4>

          <p style={{ marginTop: "30px" }}>
            Joining any of TS4U's Bootcamps can transform your financial and
            social status. Each Bootcamp equips you for senior, principal, and
            architectural positions. Transitioning to leadership roles becomes
            easier with TS4U’s Bootcamp journey, as you’ll master industry
            technologies, tools, communication, and leadership skills. Here’s
            our promise:
          </p>

          <div style={{ marginTop: "px" }}>
            {nextCareer.map((item, index) => (
              <div key={index} className="bullet-style">
                <p style={{margin:"0", padding:"0"}}>
                  <span className="bullet">.</span>
                  <span className="heading">{item?.title}:</span> {item?.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            target="_blank"
            className=" linkBtn  center_btn  mb_hidden"
            href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
          >
            <button className="book_a_meeting_btn ">
              Book a meeting
              <span>
                <LessThen color={"white"} />
              </span>
            </button>
          </Link>
        </div>

        <img src="\images\svg\Rectangle 41581.svg" />
        <Link
          target="_blank"
          className="linkBtn lg_hidden center_btn"
          href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
        >
          <button className="book_a_meeting_btn">
            Book a meeting
            <span>
              <LessThen color={"white"} />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NextCareer;
