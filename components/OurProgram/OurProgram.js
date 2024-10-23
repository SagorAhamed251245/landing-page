import React from "react";
import FirstCard from "./FirstCard";
import SecCard from "./SecCard";
// import LastCard from "./LastCard";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";

const OurProgram = () => {
  const recommendation = [
    {
      name: "Mahmud Fahim",
      review:
        "TS4U has all the resources I need. They are so helpful and also dedicated. Happy to work with TS4U. I highly recommend it to those who want to land in IT Industry.",
      image:
        "https://ts4u.us/_next/image?url=https%3A%2F%2Fts4uportal-all-files-upload.nyc3.digitaloceanspaces.com%2Fprogram-user-image%2F1649958695415-fahim.png&w=384&q=75",
    },
    {
      name: "Mohammed Hossain",
      review:
        "Great place to learn, everyone is very devoted to helping each other. I am glad that I signed up &amp; recommend people who are interested in IT to start with them. We get to learn about the latest software, gadgets &amp; tools that are very much needed in today's job market. I am already midway through the program ",
      image:
        "https://ts4u.us/_next/image?url=https%3A%2F%2Fts4uportal-all-files-upload.nyc3.digitaloceanspaces.com%2Fprogram-user-image%2F1649959782663-profilemd-pic.j&w=384&q=75",
    },
    {
      name: "Md Maher Alam",
      review:
        "I would recommend this institution.Very friendly environment.Mr.Shiblu and his teams are very skilled and professional and exactly know how to land anyone with an IT job.Also, provide Job support and make sure you are top of your game.",
      image:
        "https://ts4u.us/_next/image?url=https%3A%2F%2Fts4uportal-all-files-upload.nyc3.digitaloceanspaces.com%2Fprogram-user-image%2F1649958292334-unnamed.jpg&w=384&q=75",
    },
    {
      name: "MD Abu Ahsan",
      review:
        "The teachers are amazing, a Great place to learn, The CEO Mr. Shiblu is very friendly and a quick problem solver,  I recommend everyone.",
      image:
        "https://ts4u.us/_next/image?url=https%3A%2F%2Fts4uportal-all-files-upload.nyc3.digitaloceanspaces.com%2Fprogram-user-image%2F1649958093683-unnamed.png&w=384&q=75",
    },
    {
      name: "Jannatul Retu",
      review:
        "I should recommend everyone this platform. they are very friendly and open always to help.",
      image:
        "https://ts4u.us/_next/image?url=https%3A%2F%2Fts4uportal-all-files-upload.nyc3.digitaloceanspaces.com%2Fprogram-user-image%2F1649960015414-jannatul.png&w=384&q=75",
    },
  ];
  const recommendationVideos = [
    {
      url: "https://player.vimeo.com/video/929758905?h=a661465833&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/929786461?h=a9305870cb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/929764398?h=1b7f7683b2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    /* {
      url: "https://player.vimeo.com/video/929773001?h=450f8e6f25&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    }, */
  ];
  return (
    <>
      <section className="our_program ">
        <div className="container our_program_cards">
          <FirstCard />
          <SecCard />
          {/* <LastCard /> */}
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
