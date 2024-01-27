import React from "react";
import Header from "./Header";
import Image from "../assests/bg-image.jpg";
import { Link } from "react-router-dom";
import PostsContainer from "./PostsContainer";
const Hero = () => {
  return (
    <>
      <div className="A">
        <div className="A1">
          <div className="A11">
            {" "}
            Welcome to <span>BlogWithShreya</span>
          </div>
          <p>
            Code that communicates its purpose is very important. I often
            refactor just when I’m reading some code. That way, as I gain
            understanding about the program, I embed that understanding into the
            code for later so I don’t forget what I learned.
          </p>
          <div className="A12">
            <Link to="/freeCourses" className="A121">
              Free Courses
            </Link>
            <Link to="/blog" className="A122">
              Blog
            </Link>
          </div>
        </div>
        <img src={Image} alt="bg" className="bgImg" />
      </div>
      <PostsContainer />
    </>
  );
};

export default Hero;
