import React from "react";
import Vector from "../SVG/Vector";

const SingleCard = ({ name, review }) => {
  return (
    <div className="recommendation_card">
      {/* user info */}

      <div className="user_info">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
        <div className="div">
          <div>
            <p style={{ fontWeight: "800" }} className="user_name">
              {name}
            </p>
            <p className="p">Students of TS4U</p>
          </div>
        </div>
      </div>
      {/* reviews */}
      <p className="p1">Recommended</p>
      <div className="reviews">
        <p style={{ marginTop: "20px" }}>{review}</p>
        {/* ratings */}

        <img src="/images/svg/stars.svg" style={{ width: "150px" }} />
      </div>

      <Vector color={"#0065FF"} />
      <div className="ab_image">
        <img src="/images/svg/cotation.svg" />
      </div>
    </div>
  );
};

export default SingleCard;
