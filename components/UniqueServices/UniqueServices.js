import ServicesCards from "./ServicesCards";

// import './styles.css';

// import required modules

import Image from "next/image";

const UniqueServices = () => {
  return (
    <div className="unique_section_services_root">
      <section className="unique_service container">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Image
              loading="lazy"
              height={20}
              width={20}
              alt="star"
              src="/images/svg/Star.png"
            />
            <p className="mi_P" data-aos="fade-up" data-aos-duration="1000">
              Michigan State Approved Training Provider
            </p>
            <Image
              loading="lazy"
              height={20}
              width={20}
              alt="star"
              src="/images/svg/Star.png"
            />
          </div>
          <h4
            className="title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            What Makes Us Unique
          </h4>
        </div>
        <ServicesCards />
      </section>
    </div>
  );
};

export default UniqueServices;
