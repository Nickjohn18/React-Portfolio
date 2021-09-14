import React from "react";
import Picture from "./NickJohn.jpg";
import "./About.css";

const About = () => (
  <div id="about">
    <h1>About Me</h1>
    <div>
      <img src={Picture} alt="" id="profile-image"></img>
    </div>
    <div class="intro">
      <p>
        My name is Nick John De Luna. I was born in the Philippines and have
        lived in the United States, Jacksonville, Florida, for most of my life.
        I've lived in Jacksonville for at least 8 years and graduated from
        Sandalwood High School. I first wanted to pursue my talent in
        Informational Technology but caught interest in programming. Currently
        attending school to pursue my talent in Computer Science and in the
        process of acquiring my BS in CS major.
      </p>
    </div>
  </div>
);

export default About;
