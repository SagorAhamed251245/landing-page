import Link from "next/link";
import React from "react";
import LessThen from "../SVG/LessThen";

const BootcampCompletion = () => {
  return (
    <section className="bootcamp_completion_container ">
      <div className="bootcamp_completion container">
        <div className="left_bootcamp">
          <h4 className="title">Salary for this role</h4>

          <p style={{ marginTop: "30px" }}>
            Take one of Schools Hub’s range of Python courses and learn how to
            code using this incredibly useful language. It's simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning.
          </p>

          <div
            style={{
              display: "flex",
              marginTop: "30px",
              marginBottom: "20px",
              gap: "10px",
            }}
          >
            <img
              loading="lazy"
              className="green-tik"
              src="\images\svg\check-circle 4.svg"
            />{" "}
            <p>Low Salary $5000</p>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "30px",
              marginBottom: "20px",
              gap: "10px",
            }}
          >
            <img
              loading="lazy"
              className="green-tik"
              src="\images\svg\check-circle 4.svg"
            />{" "}
            <p>Average Salary $10000</p>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "30px",
              marginBottom: "20px",
              gap: "10px",
            }}
          >
            <img
              loading="lazy"
              className="green-tik"
              src="\images\svg\check-circle 4.svg"
            />{" "}
            <p>Top Salary $15000</p>
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

        <img
          loading="lazy"
          className="right_img"
          src="\images\svg\image 575.png"
        />
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

export default BootcampCompletion;
