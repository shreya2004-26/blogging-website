import React from "react";
import PostCard from "./PostCard";
import Image1 from "../assests/Music-Player-in-JavaScript.jpg";
import Image2 from "../assests/Build-A-Dictionary-App-in-HTML-CSS-JavaScript.jpg";
import Image3 from "../assests/AdBlock-detector-javascript.jpg";
const PostsContainer = () => {
  return (
    <>
      <div className="posts">
        <p>Recommended Posts</p>
        <div className="B">
          <PostCard
            imgSrc={Image1}
            heading="Create Custom Music Player in JavaScript"
            paragraph="This project [Music Player in JavaScript] has several features like
          you can loop, repeat or shuffle a song, play/pause a song or play the
          next or previous song. You can view your songs list and also know w..."
          />
          <PostCard
            imgSrc={Image2}
            heading="Build A Dictionary App in HTML CSS & JavaScript"
            paragraph="As you all know, what is a dictionary and what it does. In this project (Dictionary App in JavaScript), at first, on the webpage, there is only a search input and when you enter any existing word and press..."
          />
          <PostCard
            imgSrc={Image3}
            heading="Detect AdBlock using HTML CSS & JavaScript"
            paragraph="AdBlocker is a content filtering or web browser extension that blocks different online ads that interrupt your browsing experience. It helps the user to prevent unintended pop-ups, flashing banners, online..."
          />
        </div>
      </div>
    </>
  );
};

export default PostsContainer;
