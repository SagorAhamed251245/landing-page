import React from "react";
import Navbar from "./Navbar";
import BannerContent from "./BannerContent";
import Image from "next/image";

const Banner = () => {
  return (
    <header className="banner">
      <Image
        height={800}
        width={1200}
        loading="eager"
        className="background_image"
        src="/images/svg/backgroung.png"
        alt="Banner background"
      />
      <>
        <Navbar />
        <BannerContent />
      </>
    </header>
  );
};

export default Banner;
