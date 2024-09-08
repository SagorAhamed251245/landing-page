import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LessThen from "../SVG/LessThen";
import Image from "next/image";

const NextCareer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
          <h4 className="title" data-aos="fade-up" data-aos-duration="1000">Next Career Opportunities</h4>

          <p style={{ marginTop: "30px" }} data-aos="fade-left" data-aos-duration="1000">
            Joining any of TS4U's Bootcamps can transform your financial and
            social status. Each Bootcamp equips you for senior, principal, and
            architectural positions. Transitioning to leadership roles becomes
            easier with TS4U’s Bootcamp journey, as you’ll master industry
            technologies, tools, communication, and leadership skills. Here’s
            our promise:
          </p>

          <div>
            {nextCareer.map((item, index) => (
              <div key={index} className="bullet-style">
                <p style={{ margin: "0", padding: "0" }} data-aos="fade-right" data-aos-duration="1000">
                  <span className="bullet">.</span>
                  <span className="heading">{item?.title}:</span>{" "}
                  {item?.description}
                </p>
              </div>
            ))}
          </div>

          <Link data-aos="flip-left" data-aos-duration="1000"
            target="_blank"
            className=" linkBtn1  center_btn  mb_hidden"
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

        <Image data-aos="fade-left" data-aos-duration="1000"
          loading="lazy"
          height={298}
          width={320}
          src="/images/svg/Rectangle111.png"
          alt="Meeting image"
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

export default NextCareer;
