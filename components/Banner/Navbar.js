import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LessThen from "../SVG/LessThen";
import BookMeetingModal from "../Common/Book_Meeting_Modal/BookMeetingModal";

const Navbar = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  return (
    <nav className="container nav">
      {/* left nav bar */}
      <section className="">
        <Image
          loading="eager"
          className="logo"
          src="/images/svg/logo.png"
          alt="Logo"
          height={50}
          width={100}
        />
      </section>
      <section className="">
       


        <BookMeetingModal/>

       
      </section>
    </nav>
  );
};

export default Navbar;
