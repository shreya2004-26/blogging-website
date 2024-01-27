import React from "react";

const Course = ({ date, heading, par }) => {
  return (
    <>
      <div className="courseBox">
        <div className="dates">{date}</div>
        <div className="head">{heading}</div>
        <p>{par}</p>
        <button>Read More</button>
      </div>
    </>
  );
};

export default Course;
