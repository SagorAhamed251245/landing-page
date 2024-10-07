import Image from "next/image";
import React from "react";

const ClassDeliverBy = ({ program }) => {
  const { instructors } = program;
  return (
    <div className="classDeliverBy-section">
      <div className="classDeliverBy-text-section container">
        <h2>Class Delivery By</h2>
        <div className="classDeliverBy-underline"></div>
        <div className="classDeliverBy-mentor">
          {instructors?.map((ins) => {
            const { instructor } = ins;

            return (
              <div key={ins?._id} className="classDeliverBy-box">
                <Image
                  width={1080}
                  height={720}
                  src={
                    instructor?.image
                      ? instructor?.image
                      : "/subnet-matter-expert.png"
                  }
                  alt="bootcampshub bootcamp"
                />
                <h3>Mentor</h3>
                <p className="name">{instructor?.name}</p>
                <p className="area">{ins?.area}</p>
              </div>
            );
          })}

          
        </div>
      </div>
    </div>
  );
};

export default ClassDeliverBy;
