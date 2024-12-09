import Navbar from "@/components/Banner/Navbar";
import { privacyPolicyData } from "@/data/privacyPolicyData";
import React from "react";

const PrivacyPolicy = () => {
  const data = [...privacyPolicyData];

  return (
    <div className="privacy-policy">
      <div
        className="navbar"
        style={{ boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.23)" }}
      >
        <Navbar />
      </div>
      <div className="container">
        <h2
          style={{ fontSize: "30px", margin: "30px 0px", textAlign: "center" }}
          className="title"
        >
          TS4U Terms of Service
        </h2>
        {data?.map((item, index) => (
          <div key={index}>
            <h3 className="title">{item?.title}</h3>
            <ul className="link-ul">
              {item?.keyPoints?.map((keyPoint, index) => (
                <li key={index} className="link-li">
                  {keyPoint}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
