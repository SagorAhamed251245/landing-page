import React from "react";
import Navbar from "./Navbar";
import BannerContent from "./BannerContent";
import Image from "next/image";

const Banner = () => {
  return (
    <header className="banner">
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="eager"
        className="background_image"
        src="/images/svg/backgroung.png"
        alt="Banner background"
        priority
      />
      <>
        <Navbar />
        <BannerContent />
      </>
    </header>
  );
};

export default Banner;
