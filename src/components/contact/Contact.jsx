import React from "react"
import "./contact.css"
import Wave from "../../assets/footer-wave3.svg"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div id="Contact" className="container-contact">
      <div className="contact-waves">
        <img src={Wave} alt="" />
      </div>
      <div id="ContentC" className="container-contact-content">
        <motion.h1>Contact Me</motion.h1>
        <div className="container-redes">
          <div className="red">
            <a target={"_blank"} href="https://github.com/Tintaa307">
              <i class="ri-github-fill"></i>
            </a>
          </div>
          <div className="red">
            <a target={"_blank"} href="">
              <i class="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>
        <div className="email-box">
          <h3>Get in touch</h3>
          <div className="box">
            <input className="email" type="email" />
            <input className="enviar" type="submit" value="Send" />
          </div>
        </div>
        <div className="container-author">
          <div className="author">
            <h6>Created by Valentin with ❤️</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
