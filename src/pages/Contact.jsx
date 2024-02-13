import React from "react";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogDetailsContainer from "../components/BlogDetailsContainer";
import FreeCoursesDetailContainer from "../components/FreeCoursesDetailContainer";
const Contact = () => {
  const element = document.getElementById("title");
  element.innerText = "Contact | BlogWithShreya";

  return (
    <>
      <Header />
      <Contacts />
      {/* <BlogDetailsContainer /> */}
      {/* <FreeCoursesDetailContainer /> */}
      <Footer />
    </>
  );
};

export default Contact;
