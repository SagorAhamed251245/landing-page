import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import Link from "next/link";
import LessThen from "../SVG/LessThen";
import SwiperReview from "./SwiperReview";
import Image from "next/image";

const StudentsReviews = () => {
  const [platform, setPlatform] = useState("Google");
  const reviews = [
    {
      name: "Ibrahim Opu",
      platform: "Facebook",
      review:
        "I am very happy to start my journey with TS4U to be a Software Quality Automation Engineer without a non-IT background student. Mr.Shiblu Ahmed is very dedicated and committed to making his student successful. his course outline, Teaching system, and real-life experience are amazing. I am confident, My IT career dream will be fulfilled Because I am a part of the TS4U community.",
      // image:
      //   "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/401624928_3661268857444435_1220521312043024591_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hZAjCrWVuN8Q7kNvgGxMEIx&_nc_ht=scontent.fdac23-1.fna&oh=00_AYCJjxXxh6jYkrZRKgjDmdtsBh135sZS-65i0ZF8NoAfCQ&oe=665C98B0",
      image: "/images/userDefault.png",
    },
    {
      name: "Sabbin Islam",
      platform: "Google",
      review:
        "Having been a part of the TS4U family for almost a year, I've personally witnessed the unparalleled dedication this team has towards nurturing IT Engineering Bootcamp students. The office boasts a conducive environment that fosters learning, collaboration, and innovation. It's refreshing to see such a strong commitment to the students' success. Every member of the team is passionate, professional, and committed to providing the best resources and guidance. Kudos to TS4U for being a beacon of excellence in IT education!",
      // image:
      //   "https://lh3.googleusercontent.com/a-/ALV-UjVYhruSE6sJQBRUr9GlC52pUi24kUUCD3TikAC55waOqyjwbf0=w60-h60-p-rp-mo-br100",
      image: "/images/userDefault.png",
    },
    {
      name: "Veranika Halouchyts",
      platform: "Facebook",

      review:
        "I am so glad that I joined the SQA Automation Bootcamp. The team was incredibly supportive right from the start, checking in on me regularly to provide guidance and help whenever I needed it. The course content was presented in an easy-to-understand format, which made it quicker for me to grasp the concepts. It is impressive how the schedule was thoughtfully organized...",
      // image:
      //   "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/440425059_7794701627279463_6225908164677785654_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9zQ5OCzAyrwQ7kNvgEQg23s&_nc_ht=scontent.fdac23-1.fna&oh=00_AYCMG9BfI0AQcr74fs0AMMokKGy3PzarHiN5aEOfuwZdOA&oe=665C9B74",
      image: "/images/userDefault.png",
    },
    {
      name: "Mdk Hassan  ",
      platform: "Facebook",

      review:
        "I specially recommend TS4U because Shiblu Ahmmed is so generous and very helpful. Secondly they have their own Application which they develop, test, deploy live in front you and they have support for you 24/7.",
      // image:
      //   "https://scontent-sin6-4.xx.fbcdn.net/v/t1.18169-1/421020_118566554938754_215803118_n.jpg?stp=c0.28.195.195a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Hv_zkd4UQJgQ7kNvgE2S5Bq&_nc_ht=scontent-sin6-4.xx&oh=00_AYCSQ4Ieg7_eBwxvjaqic4sj-vj54__CAgHcDLHNT2Q-Mw&oe=667FEE4D",
      image: "/images/userDefault.png",
    },
    {
      name: "Mizanur Rahman Ridoy",
      platform: "Google",

      review:
        "Tech Serve for You known as TS4U is It Training centre and Software development company. TS4U provides a better work environment for the developers like us. Helps students 24/7 and provides documents and Information  as needed.",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjV9s3bwN6glGrlyOrZtP7rKvEkBqdh-Fgnay_lVTZbD5OZN7Fqhig=w60-h60-p-rp-mo-br100",
    },
    {
      name: "Mitul Das",
      platform: "Google",
      review:
        "I recently enrolled in the SQA course on TS4U's IT Engineering Bootcamp. The curriculum is top-notch, and the instructors have real-world experience. A transformative learning journey that's setting me up for a successful career in IT. Highly recommended!",
      image:
        "https://media.licdn.com/dms/image/D4D03AQHAk7Grqo4oZA/profile-displayphoto-shrink_200_200/0/1697690671363?e=1722470400&v=beta&t=yJUweJIEiHAmSMhlVjrKmbnL04VE2Xisco8T9KYSRHE",
    },
    {
      name: "Tanjin Mitul ",
      platform: "Google",
      review:
        "The AWS CloudOps course offered by TS4U, which I recently finished, was simply excellent. The knowledgeable lecturers made difficult AWS concepts simple to understand. My understanding has greatly improved as a result of my practical experience and access to AWS resources. Collaboration and development were promoted by the welcoming community. The career services provided by TS4U were very helpful in developing resumes and preparing for interviews. In general, TS4U sets a high bar for IT education and did a great job of preparing me for AWS certifications and practical applications. TS4U is the place to be if you want to succeed in AWS CloudOps. highly advisable",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjUeIA9ix9wiWwDz5551RcRTA-DFw-ftwAmBjhnLH_NatdhBI50Z=w60-h60-p-rp-mo-br100",
    },
    {
      name: "Israk Zahan",
      platform: "Google",
      review:
        "The Software Quality Automation Engineer bootcamp added valuable hands-on experience .The course content is excellent. The Instructor gives unbelievable support to each of the students. My overall experience is excellent.",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXxxdmMsQyvwQdV7nprhF6CsPTq9FIzXmIR6o0SbuvhgcwRN7p1=w60-h60-p-rp-mo-br100",
    },
    {
      name: "Mahabub Ashrafy ",
      platform: "Google",
      review:
        "What I like about TS4U is it treats you like family. Very responsive through slack and always have the urge to upgrade them and their students.Shiblu Ahmed, the CEO of the company is very dedicated and always encourage the likes of IT and NON-IT people. He is a clear example of dedication and is always open to new challanges. Its been a month I have joined them and so far I am liking it even though my background is NON-IT.Their website and module organisation is spot on and very intuitive and shouout to Shahed bhaiya whose lecture and his teaching style is top of the chart.",
      //   image:
      //     "https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/307756850_10160063035295395_2289222722772136032_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Xw7q_vAgIFUQ7kNvgFKZG2R&_nc_ht=scontent.fdac23-1.fna&oh=00_AYAzcGr1yOEPKVwmsmQvmo7Zc6oAae52Fj0ZY5SlJ9g0hw&oe=665CAC55",
      //
      image: "/images/userDefault.png",
    },
    {
      name: "Imran Nazir",
      platform: "Facebook",

      review:
        "My experience at TS4U has been very positive. The instructors truly invested their time, knowledge, and effort to ready a learner for the IT industry. All types of resources, technological skills, hands-on practice, and presentations are mandatory to learn as needed to face any interviews or in the workplace. I'm highly recommended TS4U, who wants to pursue his/her career as an IT engineer.",
      // image:
      //   "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/426382681_7386154211407198_8029979901893813721_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BqgU7g52pQYQ7kNvgFibx1L&_nc_ht=scontent-sin6-4.xx&oh=00_AYBRxp3VlRrf_i2ElB9V8ar9GN75vQnrW7FkhEIbWZyK8w&oe=665D6C3E",

      image: "/images/userDefault.png",
    },
    {
      name: "Hasan Jamil ",
      platform: "Facebook",

      review:
        "Highly recommended if your goal is IT career.They are doing tremendous job.",
      // image:
      //   "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-1/411176337_3741469226081622_844711040906122013_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pzG3uAUycHgQ7kNvgGx_t_c&_nc_ht=scontent-sin6-1.xx&oh=00_AYAm2VttFqbEyCK39LcHIhoIUJLeyZyGhWUuhiBtnnA1rw&oe=665D4B88",

      image: "/images/userDefault.png",
    },
    {
      name: "Adnan Rahman  ",
      platform: "Facebook",

      review:
        "I believe Unique strategy of TechServe4u will help most of the students to achieve their goal. Constant push from the institute makes a student more motivated and committed for their course work. I am currently enrolled in the DevOps course offered by TechServe4u and simply loving it. Instructor has immense knowledge of computer science and software engineering. And the way whole course curriculum is designed, it will not only help any student overcome their weaknesses but will also help building clear concepts about the topics. Finally I would say, if you are looking to advance your career in IT sector and searching for any forum or institute to be connected to then give TechServe4u a try. I am confident you won't regret the decision.",
      // image:
      //   "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-1/375823094_2987689338031793_5203578125427946898_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fR8OSgmYHKYQ7kNvgGFLDbZ&_nc_ht=scontent-sin6-3.xx&oh=00_AYBAf6WbFTfWpvuKm6pi4fhhgcMManBsg6ZnqlZyk3Qlhg&oe=665D538F",
      image: "/images/userDefault.png",
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
              <Image
                loading="lazy"
                src="/images/svg/google.png"
                height={20}
                width={20}
                alt=""
              />
            </span>
            <span>Reviews</span>
          </button>
          <button onClick={() => setPlatform("Facebook")}>
            <span>
              <Image
                alt=""
                loading="lazy"
                src="/images/svg/facebook.png"
                height={20}
                width={20}
              />
            </span>
            <span>Reviews</span>
          </button>
        </div>
      </div>
      {/* review content */}
      <div className="review_cards mb_hidden">
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
      <SwiperReview reviews={reviews} platform={platform} />
      <Link
        target="_blank"
        className="linkBtn center_btn"
        href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
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
