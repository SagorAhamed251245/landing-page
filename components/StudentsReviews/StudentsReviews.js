import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import Link from "next/link";
import LessThen from "../SVG/LessThen";

const StudentsReviews = () => {
  const [platform, setPlatform] = useState("Google");
  const reviews = [
    {
      name: "Ibrahim Opu",
      platform: "Facebook",
      review:
        "I am very happy to start my journey with TS4U to be a Software Quality Automation Engineer without a non-IT background student. Mr.Shiblu Ahmed is very dedicated and committed to making his student successful. his course outline, Teaching system, and real-life experience are amazing. I am confident, My IT career dream will be fulfilled Because I am a part of the TS4U community.",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/401624928_3661268857444435_1220521312043024591_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hZAjCrWVuN8Q7kNvgGxMEIx&_nc_ht=scontent.fdac23-1.fna&oh=00_AYCJjxXxh6jYkrZRKgjDmdtsBh135sZS-65i0ZF8NoAfCQ&oe=665C98B0",
    },
    {
      name: "Madiha Atif Awais",
      platform: "Google",
      review:
        "I joined TS4U with my friends recommendation. As a non IT background I can share that TS4U has been accelerating my IT skills day by day with easy to understand workshops and 24/7 help.Their dedication toward their students, Sir shiblu’s hard work, his commitment toward all his students is incredible. They have great team of mentors and they provide hands on knowledge that is up...",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-6/252050433_10226449531649167_6742088909741305043_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9Nvy8f_GQkkQ7kNvgGBq2wX&_nc_ht=scontent.fdac23-1.fna&oh=00_AYDtDwL4O3Obl_SrlIeGqgSR6CV_wGZijMMjr6PS8r77kw&oe=665C98F2",
    },
    {
      name: "Veranika Halouchyts",
      platform: "Facebook",

      review:
        "I am so glad that I joined the SQA Automation Bootcamp. The team was incredibly supportive right from the start, checking in on me regularly to provide guidance and help whenever I needed it. The course content was presented in an easy-to-understand format, which made it quicker for me to grasp the concepts. It is impressive how the schedule was thoughtfully organized...",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/440425059_7794701627279463_6225908164677785654_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9zQ5OCzAyrwQ7kNvgEQg23s&_nc_ht=scontent.fdac23-1.fna&oh=00_AYCMG9BfI0AQcr74fs0AMMokKGy3PzarHiN5aEOfuwZdOA&oe=665C9B74",
    },
    {
      name: "Shafiqul Islam ",
      platform: "Facebook",

      review:
        "I am 100% satisfied with the course and its content. Techserve4U is very professional and explains every questions I have in regards to software testing. If I have any suggestions or advice I always send questions to Techserve4U, and they explain it very professionally. Please please please before you make your decision call to Techserve4U.",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/425348827_7312596792130025_1384975397528334323_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RDL1PJ0vpzcQ7kNvgFMj9dH&_nc_ht=scontent.fdac23-1.fna&oh=00_AYBpTBLmORZGQP8R0fW24WshwSEi1IeukrgXtg42jwXBkA&oe=665CA420",
    },
    {
      name: "Sanjida Khan",
      platform: "Google",

      review:
        "TS4U is a great IT learning platform. You can have zero knowledge about technology yet they will get you covered. The program itself is designed in such a way, you’ll never find it anywhere else. I have learned so much through this program. Not only that they have a well designed program for our success, they got great instructors as well. Shiblu bhai has always motivated me to keep going and so did Pranto and everyone else...",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/302188803_1729855404049000_5527677921144125063_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vAcbpEclxAgQ7kNvgG5YLAP&_nc_ht=scontent.fdac23-1.fna&oh=00_AYArqwjEYHF8Bgp7SRtsUisMJYeZqIhRrPgh1t6xgIfoJg&oe=665C9755",
    },
    {
      name: "Samad Chowdhury",
      platform: "Google",
      review:
        "Best place to learn IT. TS4U have a lot of variety of courses and the courses are designed to help people with no IT background.",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/324666854_1854438831570668_2771090768778664050_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wEmNs265pZcQ7kNvgGw6fyX&_nc_ht=scontent.fdac23-1.fna&oh=00_AYCjfxdmdtHjWKeBvVVY_BZbqStx3TrmQdQV5eJ02zzk1g&oe=665CA3C1",
    },
    {
      name: "Inshira Anwar ",
      platform: "Google",
      review:
        "The best thing about TS4U is it’s community.It is rare to find a community that is this supportive, motivating, resourceful, professional and excellently designed to ensure your growth and success.It is highly admirable how every one in the company is so sincere and dedicated, and they work tirelessly to serve all members Especially for me, I appreciate how TS4U is patient with me, allows me to learn at a pace that works for me, continues to include and encourage me- which is very precious to me. This flexibility and inclusion is not found in all IT companies, and this makes TS4U all the more unique on top of their already amazing support, resources and services.",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/379462420_2053797658305177_7147587178995413533_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fqKInakeFz8Q7kNvgGzNu34&_nc_ht=scontent.fdac23-1.fna&oh=00_AYBRT8HBuYeIJLsiFQg2VOXiVHyJGaIFM74i2SQ1yxGbDg&oe=665CA148",
    },
    {
      name: "Alzaber Tasnim",
      platform: "Google",
      review:
        "Fully understood the SDLC, and gained experience on the latest tools and technologies by working on a live project.",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/294749339_5421868191209645_1533491236120527297_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UWjKdFsv8cgQ7kNvgFM8ku-&_nc_ht=scontent.fdac23-1.fna&oh=00_AYCFsiWTDm6SIOKJoUWOEWmC92aCZzGumHcKFFh2z3xu5g&oe=665CC112",
    },
    {
      name: "Mahabub Ashrafy ",
      platform: "Google",
      review:
        "What I like about TS4U is it treats you like family. Very responsive through slack and always have the urge to upgrade them and their students.Shiblu Ahmed, the CEO of the company is very dedicated and always encourage the likes of IT and NON-IT people. He is a clear example of dedication and is always open to new challanges. Its been a month I have joined them and so far I am liking it even though my background is NON-IT.Their website and module organisation is spot on and very intuitive and shouout to Shahed bhaiya whose lecture and his teaching style is top of the chart.",
      image:
        "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/307756850_10160063035295395_2289222722772136032_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Xw7q_vAgIFUQ7kNvgFKZG2R&_nc_ht=scontent.fdac23-1.fna&oh=00_AYAzcGr1yOEPKVwmsmQvmo7Zc6oAae52Fj0ZY5SlJ9g0hw&oe=665CAC55",
    },
    {
      name: "Imran Nazir",
      platform: "Facebook",

      review:
        "My experience at TS4U has been very positive. The instructors truly invested their time, knowledge, and effort to ready a learner for the IT industry. All types of resources, technological skills, hands-on practice, and presentations are mandatory to learn as needed to face any interviews or in the workplace. I'm highly recommended TS4U, who wants to pursue his/her career as an IT engineer.",
      image:
        "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/426382681_7386154211407198_8029979901893813721_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BqgU7g52pQYQ7kNvgFibx1L&_nc_ht=scontent-sin6-4.xx&oh=00_AYBRxp3VlRrf_i2ElB9V8ar9GN75vQnrW7FkhEIbWZyK8w&oe=665D6C3E",
    },
    {
      name: "Hasan Jamil ",
      platform: "Facebook",

      review:
        "Highly recommended if your goal is IT career.They are doing tremendous job.",
      image:
        "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-1/411176337_3741469226081622_844711040906122013_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pzG3uAUycHgQ7kNvgGx_t_c&_nc_ht=scontent-sin6-1.xx&oh=00_AYAm2VttFqbEyCK39LcHIhoIUJLeyZyGhWUuhiBtnnA1rw&oe=665D4B88",
    },
    {
      name: "Adnan Rahman  ",
      platform: "Facebook",

      review:
        "I believe Unique strategy of TechServe4u will help most of the students to achieve their goal. Constant push from the institute makes a student more motivated and committed for their course work. I am currently enrolled in the DevOps course offered by TechServe4u and simply loving it. Instructor has immense knowledge of computer science and software engineering. And the way whole course curriculum is designed, it will not only help any student overcome their weaknesses but will also help building clear concepts about the topics. Finally I would say, if you are looking to advance your career in IT sector and searching for any forum or institute to be connected to then give TechServe4u a try. I am confident you won't regret the decision.",
      image:
        "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-1/375823094_2987689338031793_5203578125427946898_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fR8OSgmYHKYQ7kNvgGFLDbZ&_nc_ht=scontent-sin6-3.xx&oh=00_AYBAf6WbFTfWpvuKm6pi4fhhgcMManBsg6ZnqlZyk3Qlhg&oe=665D538F",
    },
  ];
  return (
    <section className="students_reviews container">
      {/* titles */}
      <div>
        <h4 className="title">Students Reviews</h4>
        <div className="reviews_buttons">
          <button onClick={() => setPlatform("Google")}>
            <span>
              <img src="/images/svg/google.svg" height={20} width={20} />
            </span>
            <span>Reviews</span>
          </button>
          <button onClick={() => setPlatform("Facebook")}>
            <span>
              <img src="/images/svg/facebook.svg" height={20} width={20} />
            </span>
            <span>Reviews</span>
          </button>
        </div>
      </div>
      {/* review content */}
      <div className="review_cards">
        {reviews
          .filter((review) => review.platform === platform)
          .map((review, index) => (
            <ReviewCard
              key={index}
              name={review?.name}
              review={review?.review}
              platform={review.platform}
              image={review.image}
            />
          ))}
      </div>
      <Link
        target="_blank"
        className="linkBtn center_btn"
        href={"https://calendly.com/ts4u"}
      >
        <button className="book_a_meeting_btn">
          Book a meeting
          <span>
            <LessThen color={"white"} />
          </span>
        </button>
      </Link>
    </section>
  );
};

export default StudentsReviews;
