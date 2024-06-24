import React from "react";
import Cards from "./Cards";
import Link from "next/link";
import LessThen from "../SVG/LessThen";
import Image from "next/image";

const LatestNews = () => {
  const latestNews = [
    {
      img: "/images/image/latest_news_card1.png",
      review: "Empower Your Education with Flexible Student Loans",
    },
    {
      img: "/images/image/latest_news_card2.png",
      review: "The Evolving Dynamics of Student Relationships in IT Boot Camps",
    },
    {
      img: "/images/image/latest_news_card3.png",
      review:
        "Dreaming of a high-paying, stable IT career in today's digital age?",
    },
    {
      img: "/images/image/latest_news_card4.png",
      review:
        "Fast-Track to IT Success: Become a Test Automation Engineer with TS4U! Dive",
    },
  ];
  return (
    <section className="latest_news">
      <div className="latest_news_bg_img">
        <Image
          loading="lazy"
          src={"/images/image/blueBackground.png"}
          width={1920}
          alt="background image of latest news"
          height={500}
        />
      </div>
      <div className=" container">
        <h4 className="title">Latest News</h4>
        <div className="latest_news_cards">
          {latestNews.map((news, index) => (
            <Cards key={index} img={news.img} review={news.review} />
          ))}
        </div>
      </div>
      <Link
        target="_blank"
        className="linkBtn center_btn"
        href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
        style={{ textDecoration: "none" }}
      >
        <button className={"book_a_meeting_2"}>
          Book a meeting
          <span>
            <LessThen color={"#5831f0"} />
          </span>
        </button>
      </Link>
    </section>
  );
};

export default LatestNews;
