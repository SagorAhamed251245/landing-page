import React from "react";
import Navbar from "./Navbar";
import BannerContent from "./BannerContent";
import Image from "next/image";

const Banner = () => {
  return (
    <header className="banner">
      <Image
        loading="lazy"
        height={800}
        width={1200}
        className="background_image"
        src="/images/svg/bannerSvg.svg"
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
