import React from "react";
import LeftBookMeeting from "./LeftBookMeeting";
import RightBookMeeting from "./RightBookMeeting";

const BookMeeting = () => {
  return (
    <div
      style={{
        backgroundColor: "#5831F00D",
        height: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "120px",
      }}
    >
      <div className="container">
        <div className="book_meeting">
          <LeftBookMeeting />
          <RightBookMeeting />
        </div>
      </div>
    </div>
  );
};

export default BookMeeting;
