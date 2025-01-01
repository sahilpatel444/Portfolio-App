import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6  col-xs-12 about-img">
              <img src="image/sahil.jpg" alt="profile_pic" />
            </div>
            <div className="ccol-md-6 col-xl-6 col-lg-6  col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hello! I am currently in my final year pursuing Bachelor of
                Computer Applications (BCA) at Silver Oak University. My
                academic journey here has been incredibly rewarding, providing
                me with a solid foundation in computer science and preparing me
                for a career in technology. actively seeking internship
                opportunities to complement my academic journey and enhance my
                practical skills in the field of technology.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
