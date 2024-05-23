import React from "react";
import ReviewCard from "./ReviewCard";

const StudentsReviews = () => {
  const reviews = [
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
    {
      name: "Imran Nazir",
      review:
        "My experience at TS4U has been very positive. The instructors truly invested their time, knowledge, and effort to ready a learner for the IT industry. All types of resources, technological skills, hands-on practice, and presentations are mandatory to learn as needed to face any interviews or in the workplace. I'm highly recommended TS4U, who wants to pursue his/her career as an IT engineer.",
      image: "",
    },
    {
      name: "Sanjida Khan ",
      review:
        "TS4U is a great IT learning platform. You can have zero knowledge about technology yet they will get you covered. The program itself is designed in such a way, you’ll never find it anywhere else. I have learned so much through this program. Not only that they have a well designed program for our success, they got great instructors as well. Shiblu bhai has always motivated me to keep going and so did Pranto and everyone else...",
      image: "",
    },
    {
      name: "Samad Chowdhury",
      review:
        "best place to learn IT. TS4U have a lot of variety of courses and the courses are designed to help people with no IT background.",
      image: "",
    },
  ];
  return (
    <section className="students_reviews container">
      {/* titles */}
      <div>
        <h4 className="title">Students Reviews</h4>
        <div className="reviews_buttons">
          <button>
            <span>
              <img src="/images/svg/google.svg" height={20} width={20} />
            </span>
            <span>Reviews</span>
          </button>
          <button>
            <span>
              <img src="/images/svg/facebook.svg" height={20} width={20} />
            </span>
            <span>Reviews</span>
          </button>
        </div>
      </div>
      {/* review content */}
      <div className="review_cards">
        {reviews.map((review, index) => (
          <ReviewCard name={review?.name} review={review?.review} />
        ))}
      </div>
    </section>
  );
};

export default StudentsReviews;
