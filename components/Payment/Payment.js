import Link from "next/link";
import React from "react";

import { paymentAndFinancingOptions } from "@/data/pamentData";

const Payment = () => {
  return (
    <section className="table-box">
      <div>
        <h1 style={{ textAlign: "center" }} className="title">
          Payment and Financing:
        </h1>
        <div className="payment-table">
          <table>
            <thead>
              <tr>
                {paymentAndFinancingOptions.map((option, index) => (
                  <th key={index} style={{ textAlign: "center" }}>
                    {option.option}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {paymentAndFinancingOptions.map((option, index) => (
                  <td key={index} className="white-row">
                    <p>{option.eligibility}</p>
                    <ul>
                      {option.benefits.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
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
              {/* <LessThan color={"white"} /> */}
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Payment;
