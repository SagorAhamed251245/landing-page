import Image from "next/image";
import React, { useEffect } from "react";
import compareImage from "@/public/images/image/compareImage.svg";
import { Table } from "antd";
import { compareData } from "@/data/comparisonData";
import RoundedCorrect from "../SVG/RoundedCorrect";
import AOS from "aos";
import "aos/dist/aos.css";

import fImage from "../../public/images/image/comapareTableImage/featurebgimage.png";
import fImage1 from "../../public/images/image/comapareTableImage/bg0.png";
import fImage2 from "../../public/images/image/comapareTableImage/bg1.png";
import fImage3 from "../../public/images/image/comapareTableImage/bg2.png";
import fImage4 from "../../public/images/image/comapareTableImage/bg3.png";

function CompareTableNew() {
  const columns = [
    {
      title: <h2 style={{ textAlign: "center" }}>Feature</h2>,
      dataIndex: "feature",
      render: (feature, _, index) => (
        <div
          style={{
            backgroundImage: `url(${
              index === 0
                ? fImage.src
                : index === 1
                ? fImage1.src
                : index === 2
                ? fImage2.src
                : index === 3
                ? fImage3.src
                : fImage4.src
            })`,
          }}
          className="table_feature_card"
        >
          <div className="content">
            <h3>{feature?.title}</h3>
          </div>
        </div>
      ),
      width: "33.33%",
    },
    {
      title: <h2 style={{ textAlign: "center" }}>Other Bootcamp</h2>,
      dataIndex: "otherBootcamp",
      render: (otherBootcamp) => (
        <div className="other_bootcamp_card">
          <div>
            <div className="icon_style">
              <RoundedCorrect
                color={"#fff"}
                height={25}
                width={25}
                isCorrect={false}
              />
            </div>
            <h3>{otherBootcamp?.title}</h3>
            <p>{otherBootcamp?.description}</p>
          </div>
        </div>
      ),
      width: "33.33%",
    },
    {
      title: <h2 style={{ textAlign: "center" }}>TS4U IT Bootcamp</h2>,
      dataIndex: "ts4uItBootcamp",
      render: (ts4uItBootcamp) => (
        <div className="ts4u_bootcamp_card">
          <div>
            <div className="icon_style">
              <RoundedCorrect
                color={"#fff"}
                height={25}
                width={25}
                isCorrect={true}
              />
            </div>
            <h3>{ts4uItBootcamp?.title}</h3>
            <p>{ts4uItBootcamp?.description}</p>
          </div>
        </div>
      ),
      width: "33.33%",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="compare_table_new">
      <h2 data-aos="fade-up" data-aos-duration="1000"
        style={{ textAlign: "center", marginBottom: "30px" }}
        className="title"
      >
        Compare With Other Bootcamps
      </h2>
      <Image
        width={120}
        height={120}
        className="style_top_image"
        src={compareImage}
        alt="compare image"
      />
      <div className="container compare_table_new_container" data-aos="fade-up" data-aos-duration="1000">
        <div data-aos="fade-up" data-aos-duration="1000">
          <Table
            dataSource={compareData}
            columns={columns}
            pagination={false}
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}

export default CompareTableNew;
