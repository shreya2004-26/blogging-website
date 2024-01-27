import React from "react";
import PostsContainer from "./PostsContainer";
import PostCard from "./PostCard";
import Image1 from "../assests/Music-Player-in-JavaScript.jpg";
import Image2 from "../assests/Build-A-Dictionary-App-in-HTML-CSS-JavaScript.jpg";
import Image3 from "../assests/AdBlock-detector-javascript.jpg";
import Image4 from "../assests/Build-A-Random-Quote-Generator-in-HTML-CSS-JavaScript.jpg";
import Image5 from "../assests/Login-Form-Validation-with-Shake-Effect.jpg";
import Image6 from "../assests/Text-To-Speech-Converter-in-HTML-CSS-JavaScript.jpg";

const Blogs = () => {
  return (
    <>
      <div className="container">
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
        <PostCard
          imgSrc={Image4}
          heading="Build A Random Quote Generator in HTML CSS & JS"
          paragraph="Random Quote Generator used to generate random quotes. In this Random Quote Generator project, as you can see in the preview image, there is a quote that will be changed randomly, a button, and some icons...."
        />
        <PostCard
          imgSrc={Image5}
          heading="Login Form Validation in HTML CSS & JavaScript"
          paragraph="Form Validation in HTML means to check that the user’s entered credential – Email, Username, Password is valid and correct or not. User will not get access to the restricted page until he/she entered a val..."
        />
        <PostCard
          imgSrc={Image6}
          heading="Text To Speech Converter in HTML CSS & JavaScript"
          paragraph="Text To Speech (TTS) is a technology that enables your text to be converted into speech sounds. In this project (Text To Speech Converter App), you can convert your text into speech on different voices. A ..."
        />
      </div>
    </>
  );
};

export default Blogs;
