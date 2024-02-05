import React from "react";
import Image from "../assests/Build-A-Dictionary-App-in-HTML-CSS-JavaScript.jpg";
const BlogDetailsContainer = ({
  heading1,
  publishedAt,
  imgsrc,
  h1content1,
  heading2,
  h2content2,
}) => {
  return (
    <div className="blogContent">
      <h1>{heading1}</h1>
      <div className="date1">Published {publishedAt}</div>
      <img src={imgsrc} alt="Dict. App" />
      {h1content1.map((curr, index) => {
        //map function jo hai vo fat arrow function accept karta hai
        return <p key={index}>{curr}</p>;
      })}
      <h2>{heading2}</h2>
      {h2content2.map((curr, index) => {
        return <p key={index}>{curr}</p>;
      })}
    </div>
  );
};

export default BlogDetailsContainer;
