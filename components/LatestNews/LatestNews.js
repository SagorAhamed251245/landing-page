import React from "react";
import Cards from "./Cards";

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
      <div className=" container">
        <h4 className="title" style={{ color: "white", marginBottom: "60px" }}>
          Latest News
        </h4>
        <div className="latest_news_cards">
          {latestNews.map((news, index) => (
            <Cards key={index} img={news.img} review={news.review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;