import SwiperCard from "./SwiperCard";

const Alumni = () => {
  return (
    <div className="no-select alumni_section">
      <div>
        <p
          style={{
            fontSize: "30px",
            textAlign: "center",
            fontWeight: "bolder",
          }}
        >
          Where Our Alumni Works
        </p>

        <hr
          style={{
            width: "300px",
            margin: "0 auto",
            marginTop: "30px",
            marginBottom: "30px",
            height: "2px",
            border: "0",
            backgroundColor: "#CCCCCC",
          }}
        />
      </div>
      <SwiperCard />
    </div>
  );
};

export default Alumni;
