import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Link from "next/link";
import LessThen from "../SVG/LessThen";

const BannerContent = () => {
  const benefits = [
    {
      title: "Affordable Coaching",
      details: `Only <mark style="font-weight: bold;">$0.13</mark> per minute`,
    },
    {
      title: "Expert Instructors",
      details: "Developed by top IT professionals, including Shiblu Ahmad.",
    },
    {
      title: "Personalized Experience",
      details: "Customized learning without crowded classrooms",
    },
    {
      title: "Flexible Schedule",
      details: "Early morning or late-night sessions available.",
    },
    {
      title: "Dedicated Coach",
      details: "Personal coach provided by TS4U.",
    },
    {
      title: "Mastery Through Practice",
      details: "Weekly video interviews to hone your skills.",
    },
    {
      title: "Placement Guarantee",
      details: "TS4U supports you until you secure a job",
    },
  ];
  return (
    <section className="banner_content container">
      <LeftContent benefits={benefits} />
      <RightContent />
      <div style={{ marginTop: "30px" }}>
        {benefits?.slice(3, 7).map((item, index) => (
          <p
            className="sub_p lg-hidden"
            style={{ marginBottom: "10px" }}
            key={index}
          >
            {item.title}:{" "}
            <span dangerouslySetInnerHTML={{ __html: item.details }} />
          </p>
        ))}
      </div>
      <div className="contact_button_div d-flex-lg-hidden">
        <Link
          target="_blank"
          className="linkBtn "
          href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
        >
          <button className="contact_button">
            Book a meeting
            <span>
              {/* <img
          loading="lazy" 
   height="auto"  width="auto"  
 
 src="/images/svg/lessdthen.svg" /> */}
              <LessThen color={"white"} />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BannerContent;
