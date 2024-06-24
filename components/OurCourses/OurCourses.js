import React from "react";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";
import SecCard from "./SecCard";
import LastCard from "./LastCard";

const OurCourses = () => {
  const recommendation = [
    {
      name: "Enamul Hoque",
      review:
        "I think I  should say something about ts4u from my tech professional pathway, I have worked with a number of tech organizations as well as I have taken some tech training and certification from various institutions, but I would say that was training just training. ts4u experience says this is not a tech training institution it’s an excellent format and path from the beginning to the end, well-structured and many practical examples make this a tangible experience, there every module is very engaging, which stimulated to trainees to continue on to learn more to build a great career.",
      image:
        "https://ts4u.us/_next/image?url=https%3A%2F%2Fts4uportal-all-files-upload.nyc3.digitaloceanspaces.com%2Fprogram-user-image%2F1649958410736-Enamul-Profile.&w=384&q=75",
    },
    {
      name: "Kukon Miah",
      review:
        "I am satisfied with this course.it is the best to place to learn, if you want to build your career, this is the place for you the TechServe4U, this is really trusty and solid, they have well-experienced mentors who are currently in the IT field. The workshops are a lot of practice with real projects. Most importantl",
      image:
        "https://ts4u.us/_next/image?url=https%3A%2F%2Fts4uportal-all-files-upload.nyc3.digitaloceanspaces.com%2Fprogram-user-image%2F1649959196810-kukhon-mia.png&w=384&q=75",
    },
    {
      name: "Fuad Ahmed",
      review:
        "For me, communication is the key and they nailed it. I like to thank specially @Shiblu Ahmad for his professionalism and communication. Because of the experience that I gained with Techserve4u and the advanced knowledge I attained through their project I was able to successfully gain the confidence I needed.",
      image:
        "https://ts4u.us/_next/image?url=https%3A%2F%2Fts4uportal-all-files-upload.nyc3.digitaloceanspaces.com%2Fprogram-user-image%2F1649960145921-Fuad-Ahmed.png&w=384&q=75",
    },
    {
      name: "Kaiser Rashid",
      review:
        "Definitely recommend TS4U for those who want to transform their career in the IT industry. Their transformation structure will give you a smooth landing in this sector. Their professional website is well organized and is going through more changes to make the best out of it. The support staff is really helpful and i",
      image:
        "https://ts4u.us/_next/image?url=https%3A%2F%2Fts4uportal-all-files-upload.nyc3.digitaloceanspaces.com%2Fprogram-user-image%2F1649957483151-1646595653879-m&w=384&q=75",
    },
    {
      name: "Zannatul Ferdosh",
      review:
        "If you are looking for the best IT training company you are in the right place. I highly recommend TS4U  if you really want to start your career in the IT field. It is the place where you will get the real-life experience of the IT corporate world. It is the journey of transformation and grooming yourself for the IT",
      image:
        "https://ts4u.us/_next/image?url=https%3A%2F%2Fts4uportal-all-files-upload.nyc3.digitaloceanspaces.com%2Fprogram-user-image%2F1649957780682-1647665114908-2&w=384&q=75",
    },
  ];
  const recommendationVideos = [
    {
      url: "https://player.vimeo.com/video/930122590?h=d613d30a77&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/930120710?h=3fc66bd2fb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/930119715?h=d3189c41b1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    /*  {
      url: "https://player.vimeo.com/video/929785607?h=130f7dbd0a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    }, */
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
          recommendationVideos={recommendationVideos}
        />
      </section>
    </>
  );
};

export default OurCourses;
