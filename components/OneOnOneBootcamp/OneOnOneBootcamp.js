import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OneOnOneBootcamp = () => {
  const data = [
    {
      title: "Overview",
      details:
        "Optimized One-on-One Private Bootcamp for Exceptional Student Outcomes. Our technology-driven bootcamp leverages a dedicated private coach for each student, ensuring personalized attention and support. Here’s what our tailored approach involves:",
    },
    {
      title: "Regular Meetings",
      details:
        "Each student meets with their private coach 2 to 4 times weekly, fostering consistent guidance and progress checks.",
    },
    {
      title: "Daily Commitment",
      details:
        "Students dedicate 3 to 5 hours daily, five days a week (excluding holidays and TS4U’s company holidays), ensuring a steady pace and deep learning.",
    },
    {
      title: "Structured Roadmap",
      details:
        "A two-week study roadmap with clear milestones is established to keep students on track and focused on their goals.",
    },
    {
      title: "Content Accessibility",
      details:
        "Coaches unlock and assign tailored content, customized to each student’s learning trajectory.",
    },
  ];

  const data2 = [
    {
      title: "Agile Methodology",
      details:
        "Implementation of agile scrum through project management platforms, enhancing learning with structured sprint cycles.",
    },
    {
      title: "Interactive Sync-Up Meetings",
      details:
        "Students attend sync-up meetings to discuss any queries, allowing coaches to provide targeted solutions and explanations.",
    },
    {
      title: "Hands-On Learning",
      details:
        "Coaches demonstrate techniques hands-on and direct students to relevant videos and presentations for each module. Students then perform tasks and prepare documentation for review in subsequent meetings.",
    },
    {
      title: "Problem Solving",
      details:
        "Each session is an opportunity to address and resolve specific issues, ensuring students can confidently apply what they’ve learned.",
    },
    {
      title: "Presentation and Review",
      details:
        "In 'show and tell' sessions, students present hands-on work lasting 40 to 60 minutes. These sessions, held 20 to 25 times, are crucial for feedback and approval.",
    },
    {
      title: "Mock Interviews and Technical Preparation",
      details:
        "Coaches assign technical interview questions and schedule mock interviews to sharpen the student’s interview skills.",
    },
    {
      title: "Reflective Closure",
      details:
        "Each sprint concludes with a retrospective led by the coach, setting the stage for the next cycle and continuous improvement.",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="one-on-one">
      <div className="one-on-one-box">
        <div className="container">
          <h2
            style={{ margin: "20px 0" }}
            className="title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            One-On-One Bootcamp Week
          </h2>
          {/* <p className="description">
            This one-on-one private coaching model is central to TS4U's
            commitment to maximizing student outcomes, providing a
            comprehensive, personalized educational experience that is directly
            aligned with industry demands and individual growth objectives.
          </p> */}

          {/* main container  */}
          <div>
            {/* text content 1 */}
            <div
              className="text-container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {data?.map((item, index) => (
                <ul key={index} className="bullet-style">
                  <li>
                    {/* <span className="one-on-bullet">.</span> */}
                    <span className="one-on-heading">{item?.title}:</span>
                    {item?.details}
                  </li>
                </ul>
              ))}
            </div>

            {/* image  */}
            <div style={{ margin: "20px 0" }} className="img">
              <Image
                height={950}
                width={1440}
                loading="lazy"
                src="/images/one-one_latest.png"
                alt="OneOnOneBootcamp"
              />
            </div>

            {/* text content 2 */}
            <div
              className="text-container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {data2?.map((item, index) => (
                <ul key={index} className="bullet-style">
                  <li>
                    {/* <span className="one-on-bullet">.</span> */}
                    <span className="one-on-heading">{item?.title}:</span>
                    {item?.details}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          {/* main container ends  */}
        </div>
      </div>
    </section>
  );
};

export default OneOnOneBootcamp;
