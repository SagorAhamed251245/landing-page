import React from "react";

const RoundedCorrect = ({ color, isCorrect, width, height }) => {
  return isCorrect ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "32"}
      height={height ? height : "32"}
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M16.5 29.3327C23.8333 29.3327 29.8333 23.3327 29.8333 15.9993C29.8333 8.66602 23.8333 2.66602 16.5 2.66602C9.16663 2.66602 3.16663 8.66602 3.16663 15.9993C3.16663 23.3327 9.16663 29.3327 16.5 29.3327Z"
        stroke={color}
        stroke-width="2.74286"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.8334 16.0018L14.6067 19.7752L22.1667 12.2285"
        stroke={color}
        stroke-width="2.74286"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "32"}
      height={height ? height : "32"}
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M16.5 29.3327C23.8333 29.3327 29.8333 23.3327 29.8333 15.9993C29.8333 8.66602 23.8333 2.66602 16.5 2.66602C9.16663 2.66602 3.16663 8.66602 3.16663 15.9993C3.16663 23.3327 9.16663 29.3327 16.5 29.3327Z"
        stroke={color}
        stroke-width="2.74286"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7266 19.7752L20.2732 12.2285"
        stroke={color}
        stroke-width="2.74286"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.2732 19.7752L12.7266 12.2285"
        stroke={color}
        stroke-width="2.74286"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RoundedCorrect;
