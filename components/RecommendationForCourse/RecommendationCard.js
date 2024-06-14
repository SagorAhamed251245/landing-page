import React from "react";
import Vector from "../SVG/Vector";

const RecommendationCard = ({ review, name, image }) => {
  return (
    <div className="recommendation_card">
      {/* user info */}
      <>
        <div className="user_info">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          <div className="div">
            <div>
              <p className="user_name">{name}</p>
              <p className="p">Students of TS4U</p>
              {/* <Vector color={"#0065FF"} /> */}
            </div>
            <div>
              <img loading="lazy" src="/images/svg/cotation.svg" />
            </div>
          </div>
        </div>
        {/* reviews */}
        <div className="reviews">
          <p>{review}</p>
          {/* ratings */}

          <img
            loading="lazy"
            src="/images/svg/stars.svg"
            style={{ width: "200px" }}
          />
        </div>
      </>
    </div>
  );
};

export default RecommendationCard;
