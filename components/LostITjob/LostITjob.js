import React from "react";
import LessThen from "../SVG/LessThen";

const LostITjob = () => {
  return (
    <section className="lost_IT_job">
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

          <button className="button">
            Book a Meeting
            <span>
              <LessThen color={"white"} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LostITjob;
