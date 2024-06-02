import Link from "next/link";
import React from "react";
import LessThen from "../SVG/LessThen";

const NextCareer = () => {
  return (
    <section className="bootcamp_completion_container book_meeting ">
      <div style={{ gap: "40px" }} className="bootcamp_completion container">
        <div className="next-career">
          <h4 className="title">Next Career Opportunities</h4>

          <p style={{ marginTop: "30px" }}>
            Take one of Schools Hub’s range of Python courses and learn how to
            code using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning
          </p>
          <p style={{ marginTop: "30px" }}>
            You’ll learn how to build everything from games to sites to apps.
            Choose from a range of courses that will appeal to Take one of
            Schools Hub’s range of Python courses and learn how to code using
            this incredibly useful language
          </p>
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
