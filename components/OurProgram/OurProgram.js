import React from "react";
import FirstCard from "./FirstCard";
import SecCard from "./SecCard";
import LastCard from "./LastCard";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";

const OurProgram = () => {
  const recommendation = [
    {
      name: "Ibrahim Opu",
      review:
        "I am very happy to start my journey with TS4U to be a Software Quality Automation Engineer without a non-IT background student. Mr.Shiblu Ahmed is very dedicated and committed to making his student successful. his course outline, Teaching system, and real-life experience are amazing. I am confident, My IT career dream will be fulfilled Because I am a part of the TS4U community.",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/401624928_3661268857444435_1220521312043024591_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hZAjCrWVuN8Q7kNvgGxMEIx&_nc_ht=scontent.fdac23-1.fna&oh=00_AYCJjxXxh6jYkrZRKgjDmdtsBh135sZS-65i0ZF8NoAfCQ&oe=665C98B0",
    },
    {
      name: "Madiha Atif Awais",
      review:
        "I joined TS4U with my friend's recommendation. As a non IT background I can share that TS4U has been accelerating my IT skills day by day with easy to understand workshops and 24/7 help.Their dedication toward their students, Sir shiblu’s hard work, his commitment toward all his students is incredible. They have a great team of mentors and they provide hands on knowledge that is up...",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-6/252050433_10226449531649167_6742088909741305043_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9Nvy8f_GQkkQ7kNvgGBq2wX&_nc_ht=scontent.fdac23-1.fna&oh=00_AYDtDwL4O3Obl_SrlIeGqgSR6CV_wGZijMMjr6PS8r77kw&oe=665C98F2",
    },
    {
      name: "Veranika Halouchyts",
      review:
        "I am so glad that I joined the SQA Automation Bootcamp. The team was incredibly supportive right from the start, checking in on me regularly to provide guidance and help whenever I needed it. The course content was presented in an easy-to-understand format, which made it quicker for me to grasp the concepts. It is impressive how the schedule was thoughtfully organized...",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/440425059_7794701627279463_6225908164677785654_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9zQ5OCzAyrwQ7kNvgEQg23s&_nc_ht=scontent.fdac23-1.fna&oh=00_AYCMG9BfI0AQcr74fs0AMMokKGy3PzarHiN5aEOfuwZdOA&oe=665C9B74",
    },
    {
      name: "Shafiqul Islam",
      review:
        "I am 100% satisfied with the course and its content. Techserve4U is very professional and explains every questions I have in regards to software testing. If I have any suggestions or advice I always send questions to Techserve4U, and they explain it very professionally. Please please please before you make your decision call to Techserve4U.",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/425348827_7312596792130025_1384975397528334323_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RDL1PJ0vpzcQ7kNvgFMj9dH&_nc_ht=scontent.fdac23-1.fna&oh=00_AYBpTBLmORZGQP8R0fW24WshwSEi1IeukrgXtg42jwXBkA&oe=665CA420",
    },
    {
      name: "Sanjida Khan",
      review:
        "TS4U is a great IT learning platform. You can have zero knowledge about technology yet they will get you covered. The program itself is designed in such a way, you’ll never find it anywhere else. I have learned so much through this program. Not only that they have a well designed program for our success, they got great instructors as well. Shiblu bhai has always motivated me to keep going and so did Pranto and everyone else...",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/302188803_1729855404049000_5527677921144125063_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vAcbpEclxAgQ7kNvgG5YLAP&_nc_ht=scontent.fdac23-1.fna&oh=00_AYArqwjEYHF8Bgp7SRtsUisMJYeZqIhRrPgh1t6xgIfoJg&oe=665C9755",
    },
  ];
  const recommendationVideos = [
    {
      url: "https://player.vimeo.com/video/929774286?h=45f32c67cb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/929786461?h=a9305870cb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/929764398?h=1b7f7683b2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/929773001?h=450f8e6f25&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
  ];
  return (
    <>
      <section className="our_program ">
        <div className="container our_program_cards">
          <FirstCard />
          <SecCard />
          <LastCard />
        </div>

        <RecommendationForCourse
          titleColor={"white"}
          LessThenColor={"#5831f0"}
          btnChildren={"Book a meeting"}
          primaryBtn={false}
          recommendationVideos={recommendationVideos}
          recommendation={recommendation}
        />
      </section>
    </>
  );
};

export default OurProgram;
