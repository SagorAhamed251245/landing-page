import SwiperCard from "./SwiperCard";

const Alumni = () => {
  return (
    <div style={{ marginBottom: "120px" }} className="no-select">
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
        <div></div>
        <hr
          style={{
            width: "300px",
            margin: "0 auto",
            marginTop: "30px",
            marginBottom: "60px",
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
