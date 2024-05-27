import React from "react";
import LessThen from "../SVG/LessThen";
import Link from "next/link";

const LostITjob = () => {
  return (
    <section style={{ marginTop: "120px" }} className="lost_IT_job">
      {/* right */}
      <div className="left_section">
        <div>
          <img src="/images/image/Map.png" />
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
            href={"https://calendly.com/ts4u"}
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
