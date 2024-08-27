import dynamic from "next/dynamic";
import React, { useState } from "react";

// Dynamically import the Modal component from antd
const Modal = dynamic(async () => await import("antd/lib/modal"), {
  ssr: false,
});

function HomePopup() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      width={700}
      title={null}
      closable={false}
      className="home_popup_modal"
      style={{
        overflow: "hidden",
        padding: "0px 0px",
        borderRadius: "30px",
      }}
      open={isModalVisible}
      footer={null}
    >
      <div className="home_pop_up">
        <div className="modal_img">
          {isModalVisible && (
            <div className="close_pop_up" onClick={handleCancel}>
              <img src="/close.png" alt="close image"></img>
            </div>
          )}

          <a
            href={
              "https://us02web.zoom.us/webinar/register/WN_LNtzPBqxQoinMifTr0bnUw#/registration"
            }
            target="_blank"
          >
            <img
              className="modal-img"
              src="/home_popup/e_com_project.jpg"
              alt="modal"
            />
          </a>
        </div>
      </div>
    </Modal>
  );
}

export default HomePopup;
