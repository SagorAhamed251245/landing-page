import React from "react";
import SingleCard from "./SingleCard";

const ReviewAboutFounder = () => {
  return (
    <div className="ReviewAboutFounder">
      <h4 className="title">What Other Say About Our Principal</h4>
      <div className="review_about_founder_cards">
        <SingleCard
          name={"Ibrahim Opu"}
          occupation={"Sales and Marketing  manager at schools hub"}
          review={
            "I am very happy to start my journey with TS4U to be a Software Quality Automation Engineer without a non-IT background student. Mr.Shiblu Ahmed is very dedicated and committed..."
          }
        />
        <SingleCard
          name={"Madiha Atif Awais "}
          occupation={"Sales and Marketing  manager at schools hub"}
          review={
            "I joined TS4U with my friends recommendation. As a non IT background I can share that TS4U has been accelerating my IT skills day by day with easy to understand..."
          }
        />
        <SingleCard
          name={"Veranika Halouchyts"}
          occupation={"Sales and Marketing  manager at schools hub"}
          review={
            " joined TS4U with my friends recommendation. As a non IT background I can share that TS4U has been accelerating my IT skills day by day with easy to understand..."
          }
        />
        <SingleCard
          name={"Samad Chowdhury"}
          occupation={"Sales and Marketing  manager at schools hub"}
          review={
            "Best place to learn IT. TS4U have a lot of variety of courses and the courses are designed to help people with no IT background"
          }
        />
      </div>
    </div>
  );
};

export default ReviewAboutFounder;
