import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
const Blog = () => {
  const element = document.getElementById("title");
  element.innerText = "Blog | BlogWithShreya";

  return (
    <>
      <Header />
      <Blogs />
      <Footer />
    </>
  );
};

export default Blog;
