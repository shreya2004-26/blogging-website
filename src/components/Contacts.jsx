import React from "react";
import Image7 from "../assests/hacker.f25e50356cdf8d201cf7.png";
const Contacts = () => {
  return (
    <>
      <div className="twoContainers">
        <div className="aboutContainer">
          <div className="mainHeading">Lets talk about everything!</div>
          <img src={Image7} alt="Hacker Image" />
          <div className="subHeading">Feel free to ask us anything!</div>
          <p>
            Have doubt or suggestion to make? Feel free to ask anything. If you
            have any suggestions, please let me know. Your suggestions are
            highly appreciated. I appreciate your time and try hard to reply to
            every single message posted here! Keep dropping your priceless
            opinions.
          </p>
        </div>
        <div className="formContainer">
          <form>
            <div className="formContent">
              <div className="name1">FULL NAME</div>
              <input type="text" />
            </div>
            <div className="formContent">
              <div className="name1">EMAIL</div>
              <input type="email" />
            </div>
            <div className="formContent">
              <div className="name1">PHONE</div>
              <input type="tel" />
            </div>
            <div className="formContent">
              <div className="name1">MESSAGE</div>
              <input type="text" className="text" />
            </div>
          </form>
          <button>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Contacts;
