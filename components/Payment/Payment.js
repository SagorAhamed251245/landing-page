import Link from "next/link";
import React from "react";
import { paymentAndFinancingOptions } from "@/data/paymentData";
import LessThen from "../SVG/LessThen";

const Payment = () => {
  return (
    <section className="payment-table-box ">
      <div className="container">
        <h1 style={{ textAlign: "center" }} className="title">
          Payment and Financing
        </h1>
        <div className="payment-table">
          {paymentAndFinancingOptions?.map((option, index) => (
            <div key={index} className="payment-option">
              <h2>
                {option?.option}{" "}
                <img
                  loading="lazy"
                  height="auto"
                  width="auto"
                  src={option?.logo}
                />
              </h2>
              <div className="white-row">
                <p>{option?.eligibility}</p>
                <ul>
                  {option.benefitDetails.map((detail, i) => (
                    <li key={i}>
                      <span className="list-heading">{detail?.title}:</span>{" "}
                      <span>{detail?.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <Link
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
