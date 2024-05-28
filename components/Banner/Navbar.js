import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  return (
    <nav className="container nav">
      {/* left nav bar */}
      <section className="">
        <img className="logo" src="/images/svg/logo.svg" alt="Logo" />
      </section>
      <section className="">
        <ul className="desktop_ul">
          {/* <li className="li">Program</li>
          <li className="li">Testimonials</li> */}
          <Link
            target="_blank"
            className="linkBtn li"
            href="https://calendly.com/ts4u"
          >
            Book a meeting
          </Link>
        </ul>

        <section className="mobile_nav_section">
          <img
            className="hamburger"
            src="/images/svg/hamberger.svg"
            alt="Menu"
            onClick={toggleMobileNav}
          />
          {mobileNavVisible && (
            <ul className="mobile_ul">
              <li className="li">Program</li>
              <li className="li">Testimonials</li>
              <Link
                target="_blank"
                className="linkBtn li"
                href="https://calendly.com/ts4u"
              >
                Book a meeting
              </Link>
            </ul>
          )}
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
