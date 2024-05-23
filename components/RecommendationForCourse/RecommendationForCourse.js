import React from "react";
import ReviewCard from "../StudentsReviews/ReviewCard";
import SingleCard from "./SingleCard";

const RecommendationForCourse = () => {
  const recommendation = [
    {
      name: "Ibrahim Opu",
      review:
      "I am very happy to start my journey with TS4U to be a Software Quality Automation Engineer without a non-IT background student. Mr.Shiblu Ahmed is very dedicated and committed to making his student successful. his course outline, Teaching system, and real-life experience are amazing. I am confident, My IT career dream will be fulfilled Because I am a part of the TS4U community.",
      image: "",
    },
    {
      name: "Madiha Atif Awais",
      review:
      "I joined TS4U with my friends recommendation. As a non IT background I can share that TS4U has been accelerating my IT skills day by day with easy to understand workshops and 24/7 help.Their dedication toward their students, Sir shiblu’s hard work, his commitment toward all his students is incredible. They have great team of mentors and they provide hands on knowledge that is up...",
      image: "",
    },
    {
      name: "Veranika Halouchyts",
      review:
      "I am so glad that I joined the SQA Automation Bootcamp. The team was incredibly supportive right from the start, checking in on me regularly to provide guidance and help whenever I needed it. The course content was presented in an easy-to-understand format, which made it quicker for me to grasp the concepts. It is impressive how the schedule was thoughtfully organized...",
      image: "",
    },
  ];

  return (
    <section className="recommendation_reviews container">
      <div className="recommendation_cards">
        {recommendation.map((review, index) => (
          <SingleCard name={review?.name} review={review?.review} />
        ))}
      </div>
    </section>
  );
};

export default RecommendationForCourse;
