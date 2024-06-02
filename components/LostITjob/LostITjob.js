import React from "react";
import LessThen from "../SVG/LessThen";
import Link from "next/link";

const LostITjob = () => {
  return (
    <section className="lost_IT_job">
      {/* right */}
      <div className="left_section">
        <div className="video">
          <iframe
            id="founder"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            className="video"
            src="https://www.youtube.com/embed/A4AGAM4sijo?si=eOnjONf_ck86pdTs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* left  */}
      <div className="right_section">
        <div>
          <h4 className="title">Lost IT job?</h4>
          <p>
            Hit a career speed bump? Don't let it slow you down! With TS4U, you
            ONLY pay when you're back in the six-figure club. Yes, we're
            serious! <br /> <br />
            Custom Coaching: Dive into personalized video mock interviews,
            crafted to refine your presentation skills until you’re placed.
          </p>

          <Link
            target="_blank"
            className="linkBtn"
            href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
          >
            <button className="button">
              Book a meeting
              <span>
                <LessThen color={"white"} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LostITjob;
