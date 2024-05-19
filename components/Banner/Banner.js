import React from "react";
import Navbar from "./Navbar";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <header className="banner ">
      <img className="background_image" src="/images/svg/bannerSvg.svg" />
      <>
        <Navbar />
        <BannerContent />
      </>
    </header>
  );
};

export default Banner;
