import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { paymentAndFinancingOptions } from "@/data/paymentData";
import LessThen from "../SVG/LessThen";
import Image from "next/image";

const Payment = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="payment-table-box ">
      <div className="container">
        <h2 style={{ textAlign: "center" }} className="title" data-aos="fade-up" data-aos-duration="1000">
          Payment and Financing
        </h2>
        <div className="payment-table">
          {paymentAndFinancingOptions?.map((option, index) => (
            <div key={index} className="payment-option">
              <h2 data-aos="fade-up" data-aos-duration="1000">
                {option?.option}{" "}
                <Image
                  style={{ height: "30px", width: "100" }}
                  width={100}
                  height={30}
                  alt="paymenrt"
                  src={option?.logo}
                />
              </h2>
              <div className="white-row">
                <p data-aos="fade-left" data-aos-duration="1000">{option?.eligibility}</p>
                <ul>
                  {option.benefitDetails.map((detail, i) => (
                    <li key={i} data-aos="fade-right" data-aos-duration="1000">
                      <span className="list-heading">{detail?.title}:</span>{" "}
                      <span>{detail?.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <Link data-aos="flip-left" data-aos-duration="1000"
          style={{ marginTop: "0px" }}
          target="_blank"
          rel="noopener noreferrer"
          className="linkBtn center_btn"
          href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
        >
          <button className="book_a_meeting_btn">
            Book a meeting
            <span>
              {/* Assuming this is an icon */}
              <LessThen color={"white"} />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Payment;
