import React from "react";

const Vector = ({ color, size, classNames }) => {
  return (
    <svg
      className={`vector_relative ${classNames}`}
      width={size ? size : "122"}
      height={size ? size : "122"}
      viewBox="0 0 112 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 121L39.4831 120.913L81.5 121.5L83.413 121.453C99.2824 121.061 111.943 108.084 111.943 92.2099L112 73.2097V35.815V0C112 0 109.866 31.2451 83.6065 58.2972C55.0508 87.6294 2.77445 97.0203 0 121Z"
        fill={color}
      />
    </svg>
  );
};

export default Vector;
