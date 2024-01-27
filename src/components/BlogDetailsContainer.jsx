import React from "react";
import Image from "../assests/Build-A-Dictionary-App-in-HTML-CSS-JavaScript.jpg";
const BlogDetailsContainer = () => {
  return (
    <div className="blogContent">
      <h1>Build A Dictionary App in HTML CSS & JavaScript</h1>
      <div className="date1">Published Mon Jan 31 2022</div>
      <img src={Image} alt="Dict. App" />
      <p>
        Hey friends, today in this blog, you’ll learn how to Build A Dictionary
        App in HTML CSS & JavaScript. As you all know, what is a dictionary and
        what it does. In this project (Dictionary App in JavaScript), at first,
        on the webpage, there is only a search input and when you enter any
        existing word and press enter then there is shown a loading text of
        “Searching the meaning of…..”. If the searched word exists then there is
        shown the meaning, example, synonyms, etc. of the searched word with a
        slide animation else there is shown a message of “Can’t find the meaning
        of ……”. There is also a pronunciation icon to pronunciation your
        searched word.
      </p>
      <h2>Dictionary App in JavaScript [Source Codes]</h2>
      <p>
        To create this project (Dictionary App in JavaScript). First, you need
        to create three Files: HTML, CSS & JavaScript File. After creating these
        files just paste the following codes into your file. You can also
        download the source code files of this Dictionary App from the given
        download button. First, create an HTML file with the name of index.html
        and paste the given codes in your HTML file. Remember, you’ve to create
        a file with .html extension. Second, create a CSS file with the name of
        style.css and paste the given codes in your CSS file. Remember, you’ve
        to create a file with .css extension. Last, create a JavaScript file
        with the name of script.js and paste the given codes in your JavaScript
        file. Remember, you’ve to create a file with .js extension. That’s all,
        now you’ve successfully built an English Dictionary App in HTML CSS &
        JavaScript. If your code doesn’t work or you’ve faced any error/problem,
        you can contact me through the contact page.
      </p>
    </div>
  );
};

export default BlogDetailsContainer;
