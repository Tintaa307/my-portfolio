import React from "react"
import "./skills.css"
import Exp from "../.././assets/express-original.svg"
import Vsc from "../.././assets/vscode-original.svg"
import Github from "../.././assets/github-original.svg"
import { motion } from "framer-motion"

const Skills = () => {
  return (
    <div id="Skills" className="section-skills">
      <div id="ContentS" className="container-content-skills">
        <motion.h1>My Skills</motion.h1>
        <div className="container-skills">
          <div className="skill">
            <div className="dash"></div>
            <i class="ri-pencil-ruler-2-line"></i>
            <h2>Frontend Development</h2>
            <h4>Lenguages</h4>
            <div className="lenguajes">
              <div className="lenguaje">
                <i class="ri-html5-fill"></i>
              </div>
              <div className="lenguaje">
                <i class="ri-css3-fill"></i>
              </div>
              <div className="lenguaje">
                <i class="fa-brands fa-js"></i>
              </div>
            </div>
            <h4>Development Tools</h4>
            <div className="container-tools">
              <div className="tool">
                <i class="ri-reactjs-line"></i>
              </div>
              <div className="tool">
                <i class="fa-brands fa-figma"></i>
              </div>
              <div className="tool">
                <i class="fa-brands fa-bootstrap"></i>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="dash"></div>
            <i class="ri-code-box-fill"></i>
            <h2>Backend Development</h2>
            <h4>Lenguages</h4>
            <div className="lenguajes">
              <div className="lenguaje-back">
                <i class="fa-brands fa-node-js"></i>
              </div>
              <div className="lenguaje-back">
                <i class="fa-brands fa-python"></i>
              </div>
              <div className="lenguaje-back">
                <i class="fa-brands fa-golang"></i>
              </div>
            </div>
            <h4>Development Tools</h4>
            <div className="container-tools">
              <div className="tool">
                <img src={Exp} alt="" />
              </div>
              <div className="tool">
                <img src={Vsc} alt="" />
              </div>
              <div className="tool">
                <img src={Github} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
