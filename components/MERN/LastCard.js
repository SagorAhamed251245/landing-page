import Image from "next/image";


const LastCard = () => {
  return (
    <div className="lastCard">
      <div className="lastCard_div1">
        <div className="single_card">
          <div className="single_card_img">
            <Image
              loading="lazy"
              height={219}
              width={361}
              alt="ts4u single card image"
              src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481726898-MERN-Full-Stack"
            />
          </div>

          <div className="single_card_info">
            <div className="div_1">
              <h4>Flex: MERN Full-Stack Software Engineer</h4>
              <div>
                <p>Total hours: 100+h Video Lectures</p>
                <p>
                  5.0
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
              {/* <div className="div_2">
                <Link
                  target="_blank"
                  href={"/course/flex:-mern-full-stack-software-engineer"}
                >
                  Learn More
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="div">
        <div>
          <iframe
            loading="lazy"
            id="founder"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            className="video"
            src="https://www.youtube.com/embed/lpvYygW9Cq8?si=jeVIaVZIxz34qCjA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LastCard;
