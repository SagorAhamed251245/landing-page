import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const FirstCard = () => {
  return (
    <div className="first_card">
      <div className="single_card_img">
        <Image
          height={219}
          width={361}
          loading="lazy"
          src="https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg"
        />
      </div>
      <div className="single_card_info">
        <div className="div_1">
          <h4>AWS CloudOps Engineer</h4>
          <p>Total hours: 100+h Video Lectures</p>
          <p>
            5.0
            <span style={{ display: "flex", alignItems: "center" }}>
              {/* <section className="new_starts_class">
                <FaStar color="#ef7817" />
                <FaStar color="#ef7817" />
                <FaStar color="#ef7817" />
                <FaStar color="#ef7817" />
                <FaStar color="#ef7817" />
              </section> */}
              <Image
                height={30}
                width={150}
                loading="lazy"
                src="/images/svg/stars.svg"
                alt="star image"
                className="new_starts_class"
              />
            </span>{" "}
            <span>(#0,765)</span>
          </p>
          <div className="div_2">
            <p>
              $10.50 <span>$50.50</span>
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
