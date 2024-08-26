import Image from "next/image";
import React from "react";
import compareImage from "@/public/images/image/compareImage.svg";
import { Table } from "antd";
import { compareData } from "@/data/comparisonData";
import RoundedCorrect from "../SVG/RoundedCorrect";

function CompareTableNew() {
  const columns = [
    {
      title: <h2 style={{ textAlign: "center" }}>Feature</h2>,
      dataIndex: "feature",
      render: (feature) => (
        <div className="table_feature_card">
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
              <RoundedCorrect color={"#fff"} isCorrect={false} />
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
          {" "}
          <div>
            <div className="icon_style">
              <RoundedCorrect color={"#fff"} isCorrect={true} />
            </div>
            <h3>{ts4uItBootcamp?.title}</h3>
            <p>{ts4uItBootcamp?.description}</p>
          </div>
        </div>
      ),
      width: "33.33%",
    },
  ];
  return (
    <section className="compare_table_new">
      <h2
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
      <div className="container compare_table_new_container">
        <div>
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
