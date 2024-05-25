import React from "react";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";
import SecCard from "./SecCard";
import LastCard from "./LastCard";

const VehicleValidation = () => {
  return (
    <>
      <section className="vehicle_validation ">
        <div className="container vehicle_validation_cards">
          {/* <FirstCard /> */}
          <SecCard />
          <LastCard />
        </div>

        <RecommendationForCourse />
      </section>
    </>
  );
};

export default VehicleValidation;
