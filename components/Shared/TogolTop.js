import React from "react";

const TogolTop = () => {
  function toggleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrollTop === 0) {
      // Scroll to bottom if at the top
      window.scrollTo({
        top: windowHeight,
        behavior: "smooth",
      });
    } else {
      // Scroll to top if not at the top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <img
      onClick={toggleScroll}
      className="Uparrow"
      src="/images/svg/upAnddown.svg"
      alt="Toggle scroll"
    />
  );
};

export default TogolTop;
