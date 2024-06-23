import Link from "next/link";
import React from "react";
import LessThen from "../SVG/LessThen";
import { comparisonData } from "@/data/comparisonData";
import RoundedCorrect from "../SVG/RoundedCorrect";
import Rating from "react-rating";
import Image from "next/image";

const CompareTable = () => {
  return (
    <section className="compare-table-box">
      <div>
        <h1 style={{ textAlign: "center" }} className="title">
          Compare With Other Bootcamps
        </h1>
        <div className="compare-table">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Other Bootcamp</th>
                <th style={{ textAlign: "center" }}>Other Bootcamp Outcome</th>
                <th style={{ textAlign: "center" }}>TS4U IT Bootcamp</th>
                <th style={{ textAlign: "center" }}>TS4U Bootcamp Outcome</th>
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
                    <br />
                    <Rating
                      initialRating={item?.otherRating ? item?.otherRating : 0}
                      readonly
                      placeholderSymbol={
                        <Image
                          loading="lazy"
                          height={30}
                          width={30}
                          src="/images/svg/halfStar.svg"
                          className="rating_icon"
                          alt=""
                        />
                      }
                      emptySymbol={
                        <Image
                          height={30}
                          width={30}
                          loading="lazy"
                          src="/images/svg/emptyStar.svg"
                          className="rating_icon"
                          alt=""
                        />
                      }
                      fullSymbol={
                        <Image
                          height={30}
                          width={30}
                          loading="lazy"
                          src="/images/svg/fullStar.svg"
                          className="rating_icon"
                          alt=""
                        />
                      }
                    />
                  </td>
                  <td className="white-row">
                    <p>
                      {item?.ts4uBootcampTitle}
                      <br />
                      <span>{item?.ts4uBootcampDetails}</span>
                    </p>
                  </td>
                  <td style={{ textAlign: "center" }} className="blue-row">
                    <RoundedCorrect color={"green"} isCorrect={true} />
                    <br />
                    <Rating
                      initialRating={item?.ts4uRating ? item?.ts4uRating : 0}
                      readonly
                      placeholderSymbol={
                        <Image
                          height={30}
                          width={30}
                          loading="lazy"
                          src="/images/svg/halfStar.svg"
                          className="rating_icon"
                          alt=""
                        />
                      }
                      emptySymbol={
                        <Image
                          height={30}
                          width={30}
                          loading="lazy"
                          src="/images/svg/emptyStar.svg"
                          className="rating_icon"
                          alt=""
                        />
                      }
                      fullSymbol={
                        <Image
                          height={30}
                          width={30}
                          loading="lazy"
                          src="/images/svg/fullStar.svg"
                          className="rating_icon"
                        />
                      }
                    />
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
