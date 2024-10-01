import Image from "next/image";
import image from "../../public/landing_page/benifits.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const BenefitsCourse = ({ list, title,  index }) => {
  const [seeMore, setSeeMore] = useState(6);
  const handleSeeMore = () => {
    setSeeMore(seeMore + 6);
  };
  const handleSeeLess = () => {
    setSeeMore(6);
  };
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className="benefitsCourse">
      {list && (
        <div className="content_container container">
          <div
            className={`left ${index % 2 === 0 && !isMobile ? "order2" : ""}`}
          >
            <h2>{title}</h2>

            <div className="learns">
              {list?.slice(0, seeMore)?.map((item, i) => (
                <div key={i} className="single-learn">
                  <Image
                    width={1080}
                    height={720}
                    src="/landing_page/check-circle.png"
                    alt="circle"
                  />
                  <p>{item?.title}</p>
                </div>
              ))}
            </div>

            {list?.length > 6 && (
              <div style={{ marginTop: "40px" }}>
                {seeMore < list?.length ? (
                  <button
                    style={{ backgroundColor: "white", color: "#27ac1f" }}
                    onClick={handleSeeMore}
                    className="default_button"
                  >
                    See More
                  </button>
                ) : (
                  <button
                    style={{ backgroundColor: "white", color: "#27ac1f" }}
                    onClick={handleSeeLess}
                    className="default_button"
                  >
                    See Less
                  </button>
                )}
              </div>
            )}
          </div>

          <div className={`right ${isMobile ? "order2" : ""}`}>
            <Image
              className="image"
              src={image}
              height={720}
              width={1080}
              alt="course"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BenefitsCourse;
