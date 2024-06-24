import React from "react";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";
import SecCard from "./SecCard";
import LastCard from "./LastCard";

const VehicleValidation = () => {
  const recommendation = [
    {
      name: "Inshira Anwar",
      review:
        "The best thing about TS4U is it’s community.It is rare to find a community that is this supportive, motivating, resourceful, professional and excellently designed to ensure your growth and success.It is highly admirable how every one in the company is so sincere and dedicated, and they work tirelessly to serve all members Especially for me, I appreciate how TS4U is patient with me, allows me to learn at a pace that works for me, continues to include and encourage me- which is very precious to me. This flexibility and inclusion is not found in all IT companies, and this makes TS4U all the more unique on top of their already amazing support, resources and services.",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/379462420_2053797658305177_7147587178995413533_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fqKInakeFz8Q7kNvgGzNu34&_nc_ht=scontent.fdac23-1.fna&oh=00_AYBRT8HBuYeIJLsiFQg2VOXiVHyJGaIFM74i2SQ1yxGbDg&oe=665CA148",
    },
    {
      name: "Madiha Atif Awais",
      review:
        "I joined TS4U with my friend's recommendation. As a non IT background I can share that TS4U has been accelerating my IT skills day by day with easy to understand workshops and 24/7 help.Their dedication toward their students, Sir shiblu’s hard work, his commitment toward all his students is incredible. They have a great team of mentors and they provide hands on knowledge that is up...",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-6/252050433_10226449531649167_6742088909741305043_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9Nvy8f_GQkkQ7kNvgGBq2wX&_nc_ht=scontent.fdac23-1.fna&oh=00_AYDtDwL4O3Obl_SrlIeGqgSR6CV_wGZijMMjr6PS8r77kw&oe=665C98F2",
    },
    {
      name: "Alzaber Tasnim",
      review:
        "Fully understood the SDLC, and gained experience on the latest tools and technologies by working on a live project.",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/294749339_5421868191209645_1533491236120527297_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UWjKdFsv8cgQ7kNvgFM8ku-&_nc_ht=scontent.fdac23-1.fna&oh=00_AYCFsiWTDm6SIOKJoUWOEWmC92aCZzGumHcKFFh2z3xu5g&oe=665CC112",
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
      url: "https://player.vimeo.com/video/929770568?h=a26c999413&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/929753291?h=723aa62237&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/929764927?h=7be686ced4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    /* {
      url: "https://player.vimeo.com/video/929761344?h=298bababa5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    }, */
  ];
  return (
    <>
      <section className="vehicle_validation ">
        <div className="container vehicle_validation_cards">
          {/* <FirstCard /> */}
          <SecCard />
          <LastCard />
        </div>

        <RecommendationForCourse
          LessThenColor={"white"}
          btnChildren={"Book a meeting"}
          primaryBtn={true}
          recommendation={recommendation}
          recommendationVideos={recommendationVideos}
        />
      </section>
    </>
  );
};

export default VehicleValidation;
