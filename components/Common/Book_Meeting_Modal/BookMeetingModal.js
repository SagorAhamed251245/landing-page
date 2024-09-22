import LessThen from "@/components/SVG/LessThen";
import { Modal, Spin } from "antd";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

function BookMeetingModal({ bgColor, color, title = "Book a meeting" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const isMobile = useMediaQuery({
    query: "(max-width: 370px)",
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
    <>
      <button
        onClick={showModal}
        style={{
          cursor: "pointer",
          marginTop: "0px",
          backgroundColor: bgColor ? bgColor : null,
          color: color ? color : "white",
        }}
        className="book_a_meeting_btn"
      >
        {title}
        <span>
          <LessThen color={color ? color : "white"} />
        </span>
      </button>
      <Modal
        width={660}
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
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
          <div>
            <iframe
              src="https://www.bootcampshub.ai/form-embed/tZRIZ6Rses"
              width="100%"
              height={isMobile ? "600" : "670"}
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
    </>
  );
}

export default BookMeetingModal;
