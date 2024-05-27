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
          <li>Program</li>
          <li>Testimonials</li>
          <Link href={"https://calendly.com/ts4u"}>Book a Call</Link>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
