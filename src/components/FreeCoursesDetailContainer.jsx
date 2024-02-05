import React from "react";

const FreeCoursesDetailContainer = ({
  heading1,
  publishedAt,
  content1,
  heading2,
  content2,
  heading3,
  content3,
  heading4,
  content4,
  heading6,
  link1,
  link2,
  link1Url,
  link2Url,
}) => {
  return (
    <>
      <div className="mainContainer">
        <div className="H1">
          <div className="heading1">{heading1}</div>
          <div className="date">Published {publishedAt}</div>
          <p>{content1[0]}</p>
          <p>{content1[1]}</p>
        </div>
        <div className="H2">
          <div className="heading2">{heading2}</div>
          {content2.map((curr, index) => {
            return <p key={index}>{curr}</p>;
          })}
        </div>
        <div className="H3">
          <div className="heading3">{heading3}</div>
          {content3.map((curr, index) => {
            return <p>{curr}</p>;
          })}
        </div>
        <div className="H4">
          <div className="heading4">{heading4}</div>
          <p>{content4}</p>
        </div>
        <div className="H5">
          <div className="heading5">{heading6}</div>
          <p>
            {link1}
            <span>
              <a href={link1Url} target="_blank">
                Click Here
              </a>
            </span>
          </p>
          <p>
            {link2}
            <span>
              <a href={link2Url} target="_blank">
                Click Here
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default FreeCoursesDetailContainer;
