import React from "react";
// import Image1 from "../assests/Music-Player-in-JavaScript.jpg";
// import Image2 from "../assests/Build-A-Dictionary-App-in-HTML-CSS-JavaScript.jpg";
// import Image3 from "../assests/AdBlock-detector-javascript.jpg";
const PostCard = ({ imgSrc, heading, paragraph }) => {
  return (
    <>
      <div className="card">
        <img src={imgSrc} alt="no image" />
        <div className="box">
          <div className="para">{heading}</div>
          <p>{paragraph}</p>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
};

export default PostCard;
