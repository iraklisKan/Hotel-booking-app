import React from "react";
import starIconFilled from "../assets/starIconFilled.svg";
import starIconOutlined from "../assets/starIconOutlined.svg";


const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <img
            src={rating > index ? starIconFilled : starIconOutlined}
            alt="star-icon"
            className="w-4.5 h-4.5"
          />
        ))}
    </>
  );
};

export default StarRating;
