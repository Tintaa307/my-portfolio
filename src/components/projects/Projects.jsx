import React from "react"
import "./projects.css"
import Wave1 from "../../assets/skills-wave4.svg"
import Wave2 from "../../assets/skills-wave5.svg"
import Wave3 from "../../assets/skills-wave6.svg"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div id="Projects" className="container-projects">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>
      <div className="projects-waves">
        <img src={Wave1} alt="" />
        <img src={Wave2} alt="" />
        <img src={Wave3} alt="" />
      </div>
      <div id="ContentP" className="container-projects-content">
        <div className="projects">
          <div className="project"></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
