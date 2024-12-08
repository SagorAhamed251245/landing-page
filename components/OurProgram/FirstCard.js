import Image from "next/image";
import Link from "next/link";

const FirstCard = () => {
  return (
    <div className="first_card">
      <div className="single_card_img">
        <Image
          loading="lazy"
          height={219}
          width={361}
          src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481098318-Software-Qualit"
          alt="Single card image"
        />
      </div>
      <div className="single_card_info">
        <div className="div_1">
          <h4>Flex: Software Quality Automation Engineer</h4>
          <div>
            <p>Total hours: 100+h Video Lectures</p>
            <p>
              <span style={{ display: "flex", alignItems: "center" }}>
                {/* <section className="new_starts_class">
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                  <FaStar color="#ef7817" />
                </section> */}
                <Image
                  loading="lazy"
                  height={30}
                  width={150}
                  src="/images/svg/stars.png"
                  alt="star image"
                  className="new_starts_class"
                />
              </span>{" "}
              <span>(50+)</span>
            </p>
          </div>
          <div className="div_2">
            <p></p>
            <Link
              target="_blank"
              href={"/course/flex:-software-quality-automation-engineer"}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
