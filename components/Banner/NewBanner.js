import React from "react";
import BannerContent from "./BannerContent";
import Navbar from "./Navbar";

function NewBanner() {
  return (
    <div className="new_banner_style">
      <div className="triangle_bg">
        <div className="triangle"></div>

        <div className="navbar">
          <Navbar />
        </div>
        <div className="banner_content">
          <BannerContent />
        </div>
      </div>
    </div>
  );
}

export default NewBanner;
