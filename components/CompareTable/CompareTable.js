import Link from "next/link";
import React from "react";
import LessThen from "../SVG/LessThen";
import { comparisonData } from "@/data/comparisonData";
import RoundedCorrect from "../SVG/RoundedCorrect";

const CompareTable = () => {
  return (
    <section className="table-box">
      <div>
        <h1 style={{ textAlign: "center" }} className="title">
          Compare With Other Bootcamps
        </h1>
        <div className="compare-table">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Other Bootcamp</th>
                <th style={{ textAlign: "center" }}>Outcome</th>
                <th style={{ textAlign: "center" }}>TS4U IT Bootcamp</th>
                <th style={{ textAlign: "center" }}>Outcome</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index}>
                  <td className="white-row">
                    <p>
                      {item?.otherBootcampTitle}
                      <br />
                      <span>{item?.otherBootcampDetails}</span>
                    </p>
                  </td>
                  <td className="blue-row">
                    <RoundedCorrect color={"red"} isCorrect={false} />
                  </td>
                  <td className="white-row">
                    <p>
                      {item?.ts4uBootcampTitle}
                      <br />
                      <span>{item?.ts4uBootcampDetails}</span>
                    </p>
                  </td>
                  <td style={{ textAlign: "center" }} className="blue-row">
                    {/* <img src="\images\svg\tabtik\vuesax\linear\vuesax\linear\tick-circle.svg" /> */}
                    <RoundedCorrect color={"green"} isCorrect={true} />

                    {/* <img src="\images\svg\Ads Landing page\vuesax\linear\vuesax\linear\blacktik.svg" /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link
          target="_blank"
          className="linkBtn center_btn"
          href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
        >
          <button className="book_a_meeting_btn">
            Book a meeting
            <span>
              <LessThen color={"white"} />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CompareTable;
