import React, { useState } from "react";
import imageOne from "../../public/landing_page/faq.png";
import Image from "next/image";
import { Collapse, Space } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
const { Panel } = Collapse;

const SingleFaqs = ({ course, index }) => {
  const [activeKey, setActiveKey] = useState(["0"]);
  const [seeMore, setSeeMore] = useState(4);
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const onChange = (key) => {
    setActiveKey(key);
  };

  const handleSeeMore = () => {
    setSeeMore(seeMore + 4);
  };
  const handleSeeLess = () => {
    setSeeMore(4);
  };

  return (
    <div className="single_faq_container">
      <div className="single_faq_main_container container">
        <div className="faq_text_container">
          <h1 data-aos-delay="100" data-aos-duration="1000">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="faq_home1_container">
          <div className={`${index % 2 === 0 && !isMobile ? "order2" : ""}`}>
            <Collapse
              accordion={true}
              bordered={false}
              defaultActiveKey={activeKey}
              onChange={onChange}
              expandIconPosition={"end"}
              expandIcon={({ isActive }) =>
                isActive ? (
                  <MinusOutlined
                    className="faq_minus_icon faq_icon"
                    rotate={isActive ? 0 : 90}
                  />
                ) : (
                  <PlusOutlined
                    className="faq_plus_icon faq_icon"
                    rotate={isActive ? 0 : 90}
                  />
                )
              }
            >
              {course?.faqs?.slice(0, seeMore)?.map((item, index) => (
                <Panel
                  className={`faq_header ${
                    activeKey == item.id ? "active-header" : ""
                  }`}
                  header={item?.question}
                  key={item?.id}
                >
                  <p>{item?.answer}</p>
                </Panel>
              ))}
            </Collapse>
            {course?.faqs?.length > 4 && (
              <div style={{ marginTop: "40px" }}>
                {seeMore < course?.faqs?.length ? (
                  <button onClick={handleSeeMore} className="default_button">
                    See More
                  </button>
                ) : (
                  <button onClick={handleSeeLess} className="default_button">
                    See Less
                  </button>
                )}
              </div>
            )}
          </div>

          <div className={`faq_image_section ${isMobile ? "order2" : ""}`}>
            <div className="faq_image_div">
              <Image className="faq_img" src={imageOne} alt="faq image"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFaqs;
