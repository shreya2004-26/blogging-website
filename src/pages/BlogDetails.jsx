import React from "react";
import Header from "../components/Header";
import BlogDetailsContainer from "../components/BlogDetailsContainer";
import PostData from "../DB/PostData";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const BlogDetails = () => {
  const location = useLocation();
  console.log(location.state);
  const { heading1, publishedAt, imgsrc, h1content1, heading2, h2content2 } =
    location.state;
  return (
    <>
      <Header />
      <BlogDetailsContainer
        heading1={heading1}
        heading2={heading2}
        publishedAt={publishedAt}
        imgsrc={imgsrc}
        h1content1={h1content1}
        h2content2={h2content2}
      />
      <Footer />
    </>
  );
};

export default BlogDetails;
