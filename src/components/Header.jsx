import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="headerMainContainer">
        <div className="name">BlogWithShreya</div>
        <div className="navigationBox">
          <Link className="navigation" to="/">Home </Link>
          <Link className="navigation" to="/blog">Blog</Link>
          <Link className="navigation" to="/freeCourses">Free Courses</Link>
          <Link className="navigation" to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
