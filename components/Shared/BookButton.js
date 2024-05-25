import LessThen from "../SVG/LessThen";

const BookButton = ({ Children, LessThenColor, primary }) => {
  return (
    <button className={primary ? "book_a_meeting_1" : "book_a_meeting_2"}>
      {Children}
      <span>
        <LessThen color={LessThenColor} />
      </span>
    </button>
  );
};

export default BookButton;
