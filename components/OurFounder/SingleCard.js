import React from "react";

const SingleCard = ({ review, name, occupation }) => {
  return (
    <div className="review_card">
      {/* user info */}
      <div className="user_info">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
        <div className="div">
          <div>
            <p className="user_name">{name}</p>
            <p className="p">{occupation}</p>
          </div>
          <div></div>
        </div>
      </div>
      {/* reviews */}
      <p className="p1">Recommended</p>
      <div className="reviews">
        <p style={{ marginTop: "20px" }}>{review}</p>
        {/* ratings */}

        <img src="/images/svg/stars.svg" style={{ width: "150px" }} />
      </div>

      <div className="absolute_icons">
        <img src="/images/svg/cotation.svg" />
        <svg
          width="107"
          height="93"
          viewBox="0 0 107 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="79" cy="79" r="79" fill="#FF9900" fill-opacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default SingleCard;