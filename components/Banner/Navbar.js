import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LessThen from "../SVG/LessThen";

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
        <ul className="desktop_ul">
          {/* <li className="li">Program</li>
          <li className="li">Testimonials</li> */}
          <Link
            target="_blank" data-aos="flip-right" data-aos-duration="1000"
            className="linkBtn"
            href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
          >
            <button className="book_a_meeting" >
              Book a meeting
              <span>
                <LessThen color={"white"} />
              </span>
            </button>
          </Link>
        </ul>

        {/* <section className="mobile_nav_section">
          <Image
            loading="lazy"
            className="hamburger"
            src="/images/svg/hamberger.svg"
            alt="Menu"
            height={50}
            width={50}
            onClick={toggleMobileNav}
          />
          {mobileNavVisible && (
            <ul className="mobile_ul">
              <Link
                target="_blank"
                className="linkBtn li"
                href="https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"
              >
                Book a meeting
              </Link>
            </ul>
          )}
        </section> */}
      </section>
    </nav>
  );
};

export default Navbar;
