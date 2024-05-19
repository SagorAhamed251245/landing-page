import React from "react";
import Navbar from "./Navbar";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <header className="banner ">
      <>
        <Navbar />
        <BannerContent />
      </>
    </header>
  );
};

export default Banner;
