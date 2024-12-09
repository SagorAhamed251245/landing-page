import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BookMeetingModal from "../Common/Book_Meeting_Modal/BookMeetingModal";
import { Modal, Spin } from "antd";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const isMobile = useMediaQuery({
    query: "(max-width: 300px)",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleIframeLoad = () => {
    setLoading(false);
  };
  return (
    <section className="footer">
      <div style={{ marginTop: "40px" }}>
        <Image
          loading="lazy"
          width={195}
          height={98}
          src="/images/svg/FooterImg.png"
          alt="footer logo"
        />
      </div>

      <div className="links">
        <Link
          href={"/privacy-policy"}
          style={{
            borderRight: "2px solid white",
            paddingRight: "5px",
            marginRight: "8px",
          }}
          className="link-style"
        >
          Privacy Policy
        </Link>
        {/* <p
          style={{
            borderRight: "2px solid white",
            paddingRight: "5px",
            marginRight: "8px",
          }}
        >
          Terms and Conditions
        </p> */}
        <p
          style={{ paddingRight: "5px", cursor: "pointer" }}
          onClick={showModal}
        >
          Contact Us
        </p>
        <Modal
          width={660}
          footer={false}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className="book_a_meeting_modal"
        >
          <div>
            {loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Spin size="large" />
              </div>
            )}
            <div style={{ height: "700px" }}>
              <iframe
                src="https://pmcrmhub.ai/form-embed/tZRIZ6Rses"
                width="100%"
                height={"800px"}
                frameBorder="0"
                style={{
                  border: "none",

                  top: 0,
                  left: 0,
                  display: loading ? "none" : "block",
                }}
                allowTransparency="true"
                scrolling={isMobile ? "on" : "no"}
                onLoad={handleIframeLoad}
              ></iframe>
            </div>
          </div>
        </Modal>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <p>
          &copy; Copyrights 2024. TS4U IT Engineering Agency. All Right
          Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
