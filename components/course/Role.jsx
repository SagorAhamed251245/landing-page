import { useMediaQuery } from "react-responsive";

import Image from "next/image";
import MessagePreview from "./MessagePreview";

const Role = ({ data, index }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div style={{ backgroundColor: "#ffffff" }} className="opportunities">
      <div className="wrapper container role-wrapper">
        <div className={`left ${index % 2 === 0 && !isMobile ? "order2" : ""}`}>
          <h2>{data?.title}</h2>
          <div className="descs">
            <MessagePreview text={data?.description}></MessagePreview>
          </div>
        </div>

        <div className={`right ${isMobile ? "order2" : ""}`}>
          <Image
            width={1080}
            height={720}
            src="/multischool/bootcamps/slider/image 575.svg"
            alt="bootcampshub bootcamp"
          />
        </div>
      </div>
    </div>
  );
};

export default Role;
