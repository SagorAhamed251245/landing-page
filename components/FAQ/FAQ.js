import React from "react";

const FAQ = () => {
  return (
    <section>
      <h2 style={{ textAlign: "center" }} className="title">
        Frequently Asked Questions
      </h2>
      <section className="faq container">
        <div className="div div1">
          <div className="img">
            <img
              loading="lazy"
              height="auto"
              width="auto"
              src="\images\svg\FAQ.svg"
            />
          </div>
        </div>

        <div className="div">
          <div>
            <details>
              <summary>What makes TS4U different from other bootcamps?</summary>
              <div>
                TS4U IT training bootcamp stands out from other IT bootcamps due
                to its software development specificity. As a software
                development company, we have hands-on experience with the topics
                we teach. This means that you'll be learning from a source with
                real-world knowledge and learn in a way that's clear and
                concise.
              </div>
            </details>
          </div>
          <div>
            <details>
              <summary>What is Private and one-on-one bootcamp?</summary>
              <div>
                Personalized Learning: Our TS4U one-on-one private Bootcamp
                offers customized learning tailored to each student's experience
                level.
              </div>
            </details>
          </div>
          <div>
            <details>
              <summary>
                What is flexible enrollment and how it helps a student?
              </summary>
              <div>
                Flexible Enrollment: Join anytime and start your journey towards
                IT expertise.
              </div>
            </details>
          </div>
          <div>
            <details>
              <summary>
                How do I have the technical support when I need?
              </summary>
              <div>
                24/7 Student Support: Our team offers dedicated support for 18
                hours a day, ensuring you have assistance when you need it.
                Everything we do through our platform.
              </div>
            </details>
          </div>
          <div>
            <details>
              <summary>
                What happens in the job interview after bootcamp completion?
              </summary>
              <div>
                Job Interview Preparation: TS4U prepares every student for
                real-world job interviews through practical sessions designed to
                enhance your skills.
              </div>
            </details>
          </div>
          <div>
            <details>
              <summary>
                What are some of the difficulties non-IT people have learning
                SQA and VVE?
              </summary>
              <div>
                SQA and VVE are not difficult to learn. You will basically be
                learning how to use and implement different tools, using your
                analytical skills, and logging defects.
              </div>
            </details>
          </div>
          <div>
            <details>
              <summary>Does TS4U provide career counseling?</summary>
              <div>
                Yes, TS4U provides career counseling to all students. We guide
                you on your journey to understanding what works best for you and
                give advice on the best way to advance your career.
              </div>
            </details>
          </div>
          <div>
            <details>
              <summary>How can you define bench testing?</summary>
              <div>
                When a vehicle is not completely developed, you are testing
                small parts of that vehicle is called bench testing.
              </div>
            </details>
          </div>
          <div>
            <details>
              <summary>
                Suppose a member has not completed his graduation; can he join
                the IT Bootcamp in TS4U?
              </summary>
              <div>
                If your communication skill is good, you can follow the
                instructions properly, solve problems, and your performance is
                good, you can join the TS4U boot camp, although you are not a
                graduate.
              </div>
            </details>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FAQ;
