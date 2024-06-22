import React from "react";
import Vector from "../SVG/Vector";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

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
              <Image
                height={80}
                width={80}
                loading="lazy"
                alt="cotation"
                src="/images/svg/cotation.svg"
              />
            </div>
          </div>
        </div>
        {/* reviews */}
        <div className="reviews">
          <p>{review}</p>
          {/* ratings */}

          <section className="new_starts_class">
            <FaStar color="#ef7817" />
            <FaStar color="#ef7817" />
            <FaStar color="#ef7817" />
            <FaStar color="#ef7817" />
            <FaStar color="#ef7817" />
          </section>
        </div>
      </>
    </div>
  );
};

export default RecommendationCard;
