import React, { useEffect, useState } from "react";
import LessThen from "../SVG/LessThen";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const LeftBookMeeting = () => {
  const [modalOpen, setModalOpen] = useState({
    id: null,
    isOpen: false,
  });
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="left_book_meeting">
      <div>
        <h4 className="title " data-aos="zoom-in-up" data-aos-duration="1000">MI State Approved IT Training Provider</h4>
        <div className="" data-aos="fade-right" data-aos-duration="1000">
          Michigan State-approved IT training providers offer a range of
          programs tailored to meet industry standards and workforce demands.
          These providers undergo rigorous evaluation to ensure their courses
          meet quality criteria set by the state. By obtaining state approval,
          these providers demonstrate their commitment to delivering
          high-quality education and preparing students for successful careers
          in IT. <br />
          <br />
          <div
            className={`${
              modalOpen.isOpen ? "lg_hidden" : "hidden"
            } mi_state_image  `}
          >
            <div>
              <Image
                loading="lazy"
                height={517}
                width={480}
                src="/images/image/MIState.jpg"
                alt="Mi state"
              ></Image>
              <p
                onClick={() =>
                  setModalOpen({
                    id: null,
                    isOpen: false,
                  })
                }
              >
                X
              </p>
            </div>
          </div>
          <button
            className="button-cal"
            onClick={() =>
              setModalOpen({
                id: "1",
                isOpen: !modalOpen.isOpen,
              })
            }
          >
            View Our Mi Certificate
          </button>
          <br></br>
          <div className="_div lg_hidden">
            <div className="single_video">
              <div className="div">
                <iframe
                  title="video"
                  loading="lazy"
                  id="founder"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                  className="video"
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fts4u.us%2Fvideos%2F1080286049717678%2F&show_text=false&width=269&t=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          Students can trust that programs offered by approved providers adhere
          to industry best practices and provide relevant, up-to-date knowledge
          and skills. This approval also signifies that graduates from these
          programs are well-equipped to meet the needs of Michigan's growing
          technology sector, enhancing their employment prospects in the state
          and beyond.
        </div>

        <Link data-aos="flip-left" data-aos-duration="1200"
          target="_blank"
          className="linkBtn"
          href={"https://calendly.com/ts4u/book-a-call?back=1&month=2024-06"}
        >
          <button className="book_button">
            Book a meeting
            <span>
              <LessThen color={"white"} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LeftBookMeeting;
