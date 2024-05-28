import SingleCard from "./SingleCard";

const ReviewAboutFounder = () => {
  let reviews = [
    {
      name: "Ibrahim Opu",
      profile: "/images/svg/user.png",
      id: 1,
      occupation: "Sales and Marketing  manager at schools hub",
      review:
        "I am very happy to start my journey with TS4U to be a Software Quality Automation Engineer without a non-IT background student. Mr.Shiblu Ahmed is very dedicated and committed",
    },
    {
      name: "Ibrahim Opu",
      profile: "/images/svg/user.png",
      id: 1,
      occupation: "Sales and Marketing  manager at schools hub",
      review:
        "I am very happy to start my journey with TS4U to be a Software Quality Automation Engineer without a non-IT background student. Mr.Shiblu Ahmed is very dedicated and committed",
    },
    {
      name: "Ibrahim Opu",
      profile: "/images/svg/user.png",
      id: 1,
      occupation: "Sales and Marketing  manager at schools hub",
      review:
        "I am very happy to start my journey with TS4U to be a Software Quality Automation Engineer without a non-IT background student. Mr.Shiblu Ahmed is very dedicated and committed",
    },
    {
      name: "Ibrahim Opu",
      profile:
        "https://images.unsplash.com/photo-1551806136-68d2868db7b5?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 1,
      occupation: "Sales and Marketing  manager at schools hub",
      review:
        "I am very happy to start my journey with TS4U to be a Software Quality Automation Engineer without a non-IT background student. Mr.Shiblu Ahmed is very dedicated and committed",
    },
  ];

  return (
    <div className="ReviewAboutFounder">
      <h4 className="title">What Other Say About Our Principal</h4>
      <div className="review_about_founder_cards">
        {reviews.map((review, index) => (
          <SingleCard
            key={index}
            name={review?.name}
            occupation={review?.occupation}
            url={review?.profile}
            review={review?.review}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewAboutFounder;
