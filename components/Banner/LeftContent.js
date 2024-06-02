import Link from "next/link";
import React from "react";

const LeftContent = () => {
  return (
    <section className="left_banner_section">
      <p className="p">Are you sure you want to change your life?</p>

      <h3 className="h3">
        Meet the Revolutionary Inventor of One-on-One Private Bootcamp
      </h3>

      <p className="sub_p">
        In this free training video, learn how I landed my dream career without
        a degree or certifications.
      </p>
      <div className="contact_button_div">
        <Link
          target="_blank"
          className="linkBtn"
          href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
        >
          <button className="contact_button">
            Book a meeting
            <span>
              <img src="/images/svg/lessdthen.svg" />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LeftContent;
