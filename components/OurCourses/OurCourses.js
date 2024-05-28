import React from "react";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";
import FirstCard from "./FirstCard";
import SecCard from "./SecCard";
import LastCard from "./LastCard";

const OurCourses = () => {
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
        "I joined TS4U with my friend's recommendation. As a non IT background I can share that TS4U has been accelerating my IT skills day by day with easy to understand workshops and 24/7 help.Their dedication toward their students, Sir shiblu’s hard work, his commitment toward all his students is incredible. They have a great team of mentors and they provide hands on knowledge that is up...",
      image: "",
    },
    {
      name: "Veranika Halouchyts",
      review:
        "I am so glad that I joined the SQA Automation Bootcamp. The team was incredibly supportive right from the start, checking in on me regularly to provide guidance and help whenever I needed it. The course content was presented in an easy-to-understand format, which made it quicker for me to grasp the concepts. It is impressive how the schedule was thoughtfully organized...",
      image: "",
    },
    {
      name: "Veranika Halouchyts",
      review:
        "I am so glad that I joined the SQA Automation Bootcamp. The team was incredibly supportive right from the start, checking in on me regularly to provide guidance and help whenever I needed it. The course content was presented in an easy-to-understand format, which made it quicker for me to grasp the concepts. It is impressive how the schedule was thoughtfully organized...",
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
    <>
      <section className="our_courses">
        <div className="container our_courses_cards">
          <LastCard />
          <SecCard />
        </div>

        <RecommendationForCourse
          LessThenColor={"white"}
          btnChildren={"Book a meeting"}
          primaryBtn={true}
          recommendation={recommendation}
        />
      </section>
    </>
  );
};

export default OurCourses;
