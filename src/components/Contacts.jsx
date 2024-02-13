import React from "react";
import Image7 from "../assests/hacker.f25e50356cdf8d201cf7.png";
import { useState } from "react";
const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const inputEvent = (event) => {
    setName(event.target.value);
  };
  const inputEvent1 = (event) => {
    setEmail(event.target.value);
  };
  const inputEvent2 = (event) => {
    setPhone(event.target.value);
  };
  const inputEvent3 = (event) => {
    setMessage(event.target.value);
  };
  const onSubmits = (event) => {
    event.preventDefault();
    // console.log(name, email, phone, message);
    alert("Form Submitted");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
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
          <form
            onSubmit={onSubmits}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="formContent">
              <div className="name1">FULL NAME</div>
              <input type="text" value={name} onChange={inputEvent} />
            </div>
            <div className="formContent">
              <div className="name1">EMAIL</div>
              <input
                type="email"
                value={email}
                onChange={inputEvent1}
                id="email"
              />
            </div>
            <div className="formContent">
              <div className="name1">PHONE</div>
              <input type="tel" value={phone} onChange={inputEvent2} />
            </div>
            <div className="formContent">
              <div className="name1">MESSAGE</div>
              <input
                type="text"
                className="text"
                value={message}
                onChange={inputEvent3}
              />
            </div>
            <button type="submit" style={{ alignSelf: "center" }}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
