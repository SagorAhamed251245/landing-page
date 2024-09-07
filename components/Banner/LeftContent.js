import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const LeftContent = ({ benefits }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="left_banner_section">
      <p className="p" data-aos="fade-right" data-aos-duration="1000">Are you sure you want to change your life?</p>

      <h1 className="h3" data-aos="fade-left" data-aos-duration="1000">
        Transform your career into a six-figure income with TS4U’s Private
        One-on-One Bootcamp. Here’s what you get
      </h1>
      {benefits?.map((item, index) => (
        <p className="sub_p mb-hidden" key={index} data-aos="fade-right" data-aos-duration="1000">
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
          <button className="contact_button" data-aos="flip-left" data-aos-duration="1000">
            Book a meeting
            <span>
              <Image
                loading="lazy"
                height={15}
                width={15}
                src="/images/svg/lessdthen.svg"
                alt="lessthen"
              />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LeftContent;
