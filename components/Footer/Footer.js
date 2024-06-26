import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div style={{ marginTop: "40px" }}>
        <Image
          loading="lazy"
          width={195}
          height={98}
          src="/images/svg/FooterImg.png"
          alt="footer logo"
        />
      </div>

      <div className="links">
        <p
          style={{
            borderRight: "2px solid white",
            paddingRight: "5px",
            marginRight: "8px",
          }}
        >
          Privacy Policy
        </p>
        <p
          style={{
            borderRight: "2px solid white",
            paddingRight: "5px",
            marginRight: "8px",
          }}
        >
          Terms and Conditions
        </p>
        <p style={{ paddingRight: "5px" }}>Contact Us</p>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <p>
          &copy; Copyrights 2024. TS4U IT Engineering Agency. All Right
          Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
