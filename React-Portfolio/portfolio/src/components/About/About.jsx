import React from "react";
import "./About.scss";
function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="container-img">
            {/* <div className="overlay-img">
                {/* <img src="assets/myimg-2.jfif" alt="" />
            </div> */}
          <img src="assets/myimg-2.jfif" alt="" />
        </div>
        <div className="container-right">
          <div className="container__right--info">
          <div className="container__right--header">
            <h1>
              About <span>Me</span>
            </h1>
          </div>
          <p>
              1 year ago in the field of programming at Pragmatech Education Center
              I started studying. After 2 months of mini FullStack program
              I decided to continue in the field of FrontEnd, and 6 months of training
              then currently acting as Junior FrontEnd Developer
              I show.
            </p>
          </div>
          {/* <div className="buttons">
              <a href="" className="btn"></a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
