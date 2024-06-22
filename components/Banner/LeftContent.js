import Link from "next/link";
import React from "react";

const LeftContent = ({ benefits }) => {
  return (
    <section className="left_banner_section">
      <p className="p">Are you sure you want to change your life?</p>

      <h3 className="h3">
        Transform your career into a six-figure income with TS4U’s Private
        One-on-One Bootcamp. Here’s what you get
      </h3>
      {benefits?.map((item, index) => (
        <p className="sub_p mb-hidden" key={index}>
          {item.title}:{" "}
          <span dangerouslySetInnerHTML={{ __html: item.details }} />
        </p>
      ))}
      {benefits?.slice(0, 3).map((item, index) => (
        <p
          className="sub_p lg-hidden"
          style={{ marginBottom: "10px" }}
          key={index}
        >
          {item.title}:{" "}
          <span dangerouslySetInnerHTML={{ __html: item.details }} />
        </p>
      ))}
      {/* <p className="sub_p">
        In this free training video, learn how I landed my dream career without
        a degree or certifications.
      </p> */}
      <div className="contact_button_div mb-hidden">
        <Link
          target="_blank"
          className="linkBtn "
          href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
        >
          <button className="contact_button">
            Book a meeting
            <span>
              <img
                loading="lazy"
                height="auto"
                width="auto"
                src="/images/svg/lessdthen.svg"
              />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LeftContent;
