import BookMeetingModal from "../Common/Book_Meeting_Modal/BookMeetingModal";

const LeftContent = ({ benefits }) => {
  return (
    <section className="left_banner_section">
      <p className="p">Are you sure you want to change your life?</p>

      <h1 className="h3">
        Transform your career into a six-figure income with TS4U’s Private
        One-on-One Bootcamp. Here’s what you get
      </h1>
      {benefits?.map((item, index) => (
        <p className="sub_p mb-hidden" key={index}>
          {item.title}:{" "}
          <span dangerouslySetInnerHTML={{ __html: item.details }} />
        </p>
      ))}
      {benefits?.slice(0, 3).map((item, index) => (
        <p
          className="sub_p lg-hidden"
          style={{ marginBottom: "10px" }}
          key={index}
        >
          {item.title}:{" "}
          <span dangerouslySetInnerHTML={{ __html: item.details }} />
        </p>
      ))}

      <div
        style={{ marginTop: "10px" }}
        className="contact_button_div mb-hidden"
      >
        <h3 style={{ marginBottom: "10px", fontSize: "24px" }}>
          Apply now to get 50% off on our Bootcamp program
        </h3>
        <BookMeetingModal title="Get Offer" />
      </div>
    </section>
  );
};

export default LeftContent;
