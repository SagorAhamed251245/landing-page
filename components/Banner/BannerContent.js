import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const BannerContent = () => {
  return (
    <section className="banner_content container">
      <LeftContent />
      <RightContent />
    </section>
  );
};

export default BannerContent;
