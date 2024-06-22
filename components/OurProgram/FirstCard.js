import Image from "next/image";
import Link from "next/link";
import React from "react";

const FirstCard = () => {
  return (
    <div className="first_card">
      <div className="single_card_img">
        <Image
          height={219}
          width={361}
          loading="lazy"
          src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481098318-Software-Qualit"
        />
      </div>
      <div className="single_card_info">
        <div className="div_1">
          <h4>Flex: Software Quality Automation Engineer</h4>
          <div>
            <p>Total hours: 100+h Video Lectures</p>
            <p>
              5.0
              <span style={{ display: "flex", alignItems: "center" }}>
                <Image
                  height={30}
                  width={150}
                  loading="lazy"
                  src="/images/svg/stars.svg"
                  alt="star image"
                />
              </span>{" "}
              <span>(50+)</span>
            </p>
          </div>
          <div className="div_2">
            <p></p>
            <Link
              target="_blank"
              href={
                "https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"
              }
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
