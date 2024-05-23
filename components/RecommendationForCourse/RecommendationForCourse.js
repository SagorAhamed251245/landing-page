import React from 'react';
import ReviewCard from '../StudentsReviews/ReviewCard';

const RecommendationForCourse = () => {
    const recommendation = [
        {
          name: "Ibrahim Opu",
          review:
            "I am very happy to start my journey with TS4U to be a Software Quality Automation Engineer without a non-IT background student. Mr.Shiblu Ahmed is very dedicated and committed...",
          image: "",
        },
        {
          name: "Madiha Atif Awais",
          review:
            "I joined TS4U with my friends recommendation. As a non IT background I can share that TS4U has been accelerating my IT skills day by day with easy to understand...",
          image: "",
        },
        {
          name: "Veranika Halouchyts",
          review:
            "I am so glad that I joined the SQA Automation Bootcamp. The team was incredibly supportive right from the start, checking in on me regularly to provide guidance and help...",
          image: "",
        }
      ];

    return (
        <section  className="recommendation_reviews container">
            <div className="recommendation_cards">
        {recommendation.map((review, index) => (
          <ReviewCard name={review?.name} review={review?.review} />
        ))}
      </div>
        </section>
    );
};

export default RecommendationForCourse;