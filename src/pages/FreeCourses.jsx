import React from "react";
import Header from "../components/Header";
import CoursesContainer from "../components/CoursesContainer";
import Footer from "../components/Footer";
const FreeCourses = () => {
  const element = document.getElementById("title");
  element.innerText = "FreeCourses | BlogWithShreya";

  return (
    <>
      <Header />
      <CoursesContainer />
      <Footer />
    </>
  );
};

export default FreeCourses;
