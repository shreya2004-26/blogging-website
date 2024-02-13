import React from "react";
import Header from "../components/Header";
import FreeCoursesDetailContainer from "../components/FreeCoursesDetailContainer";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const FreeCourseDetails = () => {
  const element = document.getElementById("title");
  element.innerText = "FreeCoursesDetails | BlogWithShreya";

  const location = useLocation();
  console.log(location.state);
  const {
    heading1,
    publishedAt,
    content1,
    heading2,
    content2,
    heading3,
    content3,
    heading4,
    content4,
    heading6,
    link1,
    link2,
    link1Url,
    link2Url,
  } = location.state;

  return (
    <>
      <Header />
      <FreeCoursesDetailContainer
        heading1={heading1}
        publishedAt={publishedAt}
        content1={content1}
        content2={content2}
        content3={content3}
        content4={content4}
        heading2={heading2}
        heading3={heading3}
        heading4={heading4}
        heading6={heading6}
        link1={link1}
        link2={link2}
        link1Url={link1Url}
        link2Url={link2Url}
      />
      <Footer />
    </>
  );
};

export default FreeCourseDetails;
