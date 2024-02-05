import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FreeCourseData from "../DB/FreeCourseData";

const Course = ({ date, heading, par, index }) => {
  const navigate = useNavigate();
  const handleNaviagate = () => {
    console.log(index);
    navigate("/freeCourse/details", { state: FreeCourseData[index] });
  };
  return (
    <>
      <div className="courseBox">
        <div className="dates">{date}</div>
        <div className="head">{heading}</div>
        <p>{par}</p>
        <button style={{ cursor: "pointer" }} onClick={handleNaviagate}>
          Read More
        </button>
      </div>
    </>
  );
};

export default Course;
