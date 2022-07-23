import React from "react"
import "./about.css"
import Wave from "../../assets/hero-wave3.svg"

const About = () => {
  return (
    <div id="About" className="container-about">
      <div className="wave-about"></div>
      <div id="ContentA" className="container-info">
        <h1>About Me</h1>
        <div className="container-description">
          <div className="text">
            <p>
              Hi, i´m Valentin Gonzalez frontend developer very passionate and
              always looking to learn and improve. <br />
              <br />
              I'm 16 and my passion was always being able to develop
              applications or web pages. Although I love the frontend I started
              with the backend and then I found my passion in this area. <br />
              <br />I adapt very easily to tasks and I love working in a team
              and carrying out large projects.
            </p>
          </div>
        </div>
        <div className="container-circles">
          <div className="container-move-circles">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
