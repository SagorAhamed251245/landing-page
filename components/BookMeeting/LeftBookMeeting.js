import React from "react";
import LessThen from "../SVG/LessThen";
import Link from "next/link";
import Image from "next/image";

const LeftBookMeeting = () => {
  return (
    <div className="left_book_meeting">
      <div>
        <h4 className="title ">MI State Approved IT Training Provider</h4>
        <p className="">
          Michigan State-approved IT training providers offer a range of
          programs tailored to meet industry standards and workforce demands.
          These providers undergo rigorous evaluation to ensure their courses
          meet quality criteria set by the state. By obtaining state approval,
          these providers demonstrate their commitment to delivering
          high-quality education and preparing students for successful careers
          in IT. <br />
          <br />
          <span className="lg-hidden mi_state_image">
            <Image
              loading="lazy"
              height={517}
              width={480}
              src="/images/image/MIState.jpg"
              alt="Mi state"
            />
          </span>
          Students can trust that programs offered by approved providers adhere
          to industry best practices and provide relevant, up-to-date knowledge
          and skills. This approval also signifies that graduates from these
          programs are well-equipped to meet the needs of Michigan's growing
          technology sector, enhancing their employment prospects in the state
          and beyond.
        </p>

        <Link
          target="_blank"
          className="linkBtn"
          href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
        >
          <button className="book_button">
            Book a meeting
            <span>
              <LessThen color={"white"} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LeftBookMeeting;
