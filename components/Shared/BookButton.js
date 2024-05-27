import Link from "next/link";
import LessThen from "../SVG/LessThen";

const BookButton = ({ Children, LessThenColor, primary }) => {
  return (
    <Link href={"https://calendly.com/ts4u"} style={{ textDecoration: "none" }}>
      <button className={primary ? "book_a_meeting_1" : "book_a_meeting_2"}>
        {Children}
        <span>
          <LessThen color={LessThenColor} />
        </span>
      </button>
    </Link>
  );
};

export default BookButton;
