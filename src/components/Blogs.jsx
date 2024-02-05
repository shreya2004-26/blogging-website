import React from "react";
import PostsContainer from "./PostsContainer";
import PostCard from "./PostCard";
import PostData from "../DB/PostData";

const Blogs = () => {
  return (
    <>
      <div className="container">
        {PostData.map((curr, index) => {
          return (
            <PostCard
              imgSrc={curr.imgsrc}
              heading={curr.heading1.slice(0, 45) + "..."}
              paragraph={curr.h1content1[1].slice(0, 170) + "..."}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
