import React from "react";
import Course from "./Course";

const CoursesContainer = () => {
  return (
    <>
      <div className="mainCourse">
        <Course
          date="Sat Dec 25 2021"
          heading="IIT Roorkee Free Online Certification Courses | Learn Digital Designing for Free"
          par="Hey Students! We are back again with some free Workshops for you. This time if you are a designer and want to master your design skills on Autodesk then this post is for you. If you are a beginner even "
        />
        <Course
          date="Tue Dec 21 2021"
          heading="Google Learn to Earn Cloud Security Challenge Bonus Level | Free Swags"
          par="Hey Students! Yesterday we posted a blog related to Learn to Earn Cloud Security Challenge 2022 Bonus Level where we got an amazing response from you guys. But we are still left with the registration part. How does it work?"
        />
        <Course
          date="Thu Dec 23 2021"
          heading="Android Day on Google Open Source Live on 3rd and 4th Feb 2022: Register Now and Get Free Swags from Google"
          par="Hey Students! Are you an Android enthusiast and looking for some open source events related to it? If yes the Android Day on Google Open Source are about to begin where you gain Google swag & live caricature face drawings!"
        />
        <Course
          date="Sun Dec 19 2021"
          heading="Google Maps Local guide Program For Indians | All Benefits & Rewards"
          par="Hey Students! Here is the amazing news for everyone. In this post I will Guide you about the Google maps Local Guide Program i.e. specially for Indians regardless of degree & Education. What is the Google Local Guide program? Local"
        />
      </div>
    </>
  );
};

export default CoursesContainer;
