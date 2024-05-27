import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container nav">
      {/* left nav bar */}
      <section className="">
        <img className="logo" src="/images/svg/logo.svg" />
      </section>
      <section className="">
        <ul>
          <li className="li">Program</li>
          <li className="li">Testimonials</li>

          <Link
            target="_blank"
            className="linkBtn li"
            href={"https://calendly.com/ts4u"}
          >
            Book a meeting
          </Link>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
