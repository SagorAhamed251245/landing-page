import React from "react";
import LeftBookMeeting from "./LeftBookMeeting";
import RightBookMeeting from "./RightBookMeeting";

const BookMeeting = () => {
  return (
    <section className="book_meeting_section" style={{}}>
      <div className="container">
        <div className="book_meeting">
          <LeftBookMeeting />
          <RightBookMeeting />
        </div>
      </div>
    </section>
  );
};

export default BookMeeting;
