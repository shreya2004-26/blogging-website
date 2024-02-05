import React from "react";
// import Image1 from "../assests/Music-Player-in-JavaScript.jpg";
// import Image2 from "../assests/Build-A-Dictionary-App-in-HTML-CSS-JavaScript.jpg";
// import Image3 from "../assests/AdBlock-detector-javascript.jpg";
import { Link, useNavigate } from "react-router-dom";
import PostData from "../DB/PostData";
const PostCard = ({ imgSrc, heading, paragraph, index }) => {
  const navigate = useNavigate();
  const handleNewPage = () => {
    console.log("clicked index", index);
    navigate("/blog/details", { state: PostData[1] });
  };

  return (
    <>
      <div className="card">
        <img src={imgSrc} alt="no image" />
        <div className="box">
          <div className="para">{heading}</div>
          <p>{paragraph}</p>
          <button onClick={handleNewPage} style={{ cursor: "pointer" }}>
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default PostCard;
