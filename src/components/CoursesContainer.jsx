import React from "react";
import Course from "./Course";
import FreeCourses from "../DB/FreeCourseData";
const CoursesContainer = () => {
  return (
    <>
      <div className="mainCourse">
        {FreeCourses.map((curr, index) => {
          return (
            <Course
              date={curr.publishedAt}
              heading={curr.heading1}
              par={curr.content1[0].slice(0, 220) + "..."}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default CoursesContainer;
