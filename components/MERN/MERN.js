import React from "react";
import SecCard from "./SecCard";
import LastCard from "./LastCard";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";

const MERN = () => {
  const recommendation = [
    {
      name: "Foysol Ahmed ",
      review:
        "Be honest techserve4u is a best institute.I really appreciate their hard work for student.They maintain excellent schedule.Their tips and tricks for a class for a student is amazing.I did 2 months course in another institute,they did a broken class.I couldnt catch any concept about QA.Because they dont know hmmm ow to control and scheduled a student. But I am doing same course in techserve4u.Belive me it's an outstanding IT transformation course.From me I 100% recommended techserve4u for all of you guys.",
      image:
        "https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-1/124804770_109682797621525_1458276672414756454_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1mV3OEdbSJcQ7kNvgHwzIps&_nc_ht=scontent-sin6-1.xx&oh=00_AYAd-csluYjAvdcpUUGcT_P3ZRQYYJz1BsuXtJitYzPogA&oe=667F145E",
    },
    {
      name: "Ferdoush Munni ",
      review:
        "In my opinion, TechServe4U It's a very good place to you if someone want to build up his career transforming into IT. Most important things is, they are giving priority equally to all of member and push to do productive work. I learned more things from their team. so that I strongly recommend to join here and see what are they doing here actually. I hopefuls no one wouldn’t disappointed to join here. Thanks",
      image:
        "https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-1/56375783_846091935745566_6046122889617342464_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AzuW5EyVupIQ7kNvgHAze_V&_nc_ht=scontent-sin6-4.xx&oh=00_AYB-nJThacvQiRhmnysK2E8P4ZeVHH8SYqq3fwaRDCzDGQ&oe=667F0D6C",
    },
    {
      name: "Iftekhar Uddin",
      review:
        "TechServe4U is more than just an IT learning outfit. They are highly focused, relentlessly fearless, future-oriented developers, engineers, visualizers, and strategists. They believe passionately in transforming learning experience to change lives, fuel innovation, push beyond boundaries and foster innovation. ",
      image:
        "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-1/440362165_7477784528982797_8210442331030087565_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=R-VXlMAMXLUQ7kNvgHHCoYA&_nc_ht=scontent-sin6-1.xx&oh=00_AYAspuwjHyUJ2IkxAIhIPWTLFqYYYNsFay76GD2E6gHudg&oe=665D7ACC",
    },
    {
      name: "Sujoy Barua ",
      review:
        "As a Bangladeshi, I am really amazed to see how a man (Shiblu Ahmad) from far away abroad is thinking of the future of his native siblings and making various plans to support Bengali Community. I am really proud to join in such journey under Techserv4u.llc. Specially the support and communication skills within team really amazing even where people work/learn remotely.",
      image:
        "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/424705815_10228269108147000_5521562613359742285_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gWRORae8fIMQ7kNvgFXCVDo&_nc_ht=scontent-sin6-4.xx&oh=00_AYA1fCoYMZHdayI24dJtbpygr4inLPLMePFYlL30k88Tbw&oe=665D58D5",
    },
    {
      name: "Mohsin Bappy ",
      review:
        "This is the best IT training center I've ever come across. They will not let you down instead hold your hand to bring you up on the right path to be an IT professional. I'm recommending everyone who wants to transform their career into IT, please have a talk to @Shiblu Ahmed before making any decision.",
      image:
        "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-1/398749115_6816305198454479_4426443633923755220_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0Vb1Ufz3Z0EQ7kNvgFz8soH&_nc_ht=scontent-sin6-3.xx&oh=00_AYCUzFM_cy6MViyNk5N2Kb2U4gVtW2u-XYVUv4f0PHwhnQ&oe=665D68B3",
    },
  ];
  const recommendationVideos = [
    {
      url: "https://player.vimeo.com/video/930124563?h=155d435da0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/929766708?h=24116a86a2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/929774286?h=45f32c67cb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      url: "https://player.vimeo.com/video/929769118?h=debe947ba3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
  ];
  return (
    <>
      <h4 className="title ourProgramTitle">Our Program</h4>
      <div className="ourProgramTitle_mern">
        <section className="mern_stack ">
          <div className="container mern_stack_cards">
            {/* <FirstCard /> */}
            <SecCard />
            <LastCard />
          </div>
        </section>
        <RecommendationForCourse
          primaryBtn={true}
          btnChildren={"Book a meeting"}
          LessThenColor={"white"}
          recommendation={recommendation}
          recommendationVideos={recommendationVideos}
        />
      </div>
    </>
  );
};

export default MERN;
