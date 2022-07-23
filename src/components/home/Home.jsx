import React, { useEffect } from "react"
import "./home.css"
import { useTypewriter } from "react-simple-typewriter"
import Imagen from "../../assets/home-img.png"
import Wave1 from "../../assets/wave1.png"
import Wave2 from "../../assets/hero-wave2.svg"
import Wave3 from "../../assets/hero-wave3.svg"

const Home = () => {
  const { text } = useTypewriter({
    words: ["Developer", "Designer", "Enthusiast"],
    typeSpeed: 100,
    delaySpeed: 100,
    delaySpeed: 1000,
    loop: false,
  })
  return (
    <main id="Home" className="container-main">
      <div className="waves">
        <img src={Wave1} alt="" className="wave1" />
        <img src={Wave2} alt="" className="wave2" />
      </div>
      <div id="#ContentH" className="container-content">
        <div className="container-presentation">
          <h1>
            I´m Valentin Gonzalez <br /> Frontend <span>{text}</span>
          </h1>
          <div className="container-text">
            <p>
              I´m a Frontend Developer with a passion for creating beautiful and
              functional interfaces, Applications and Websites.
            </p>
          </div>
          <a href="#Contact">
            <button className="btn-home">
              <div className="dash"></div>
              <a href="#Contact">Contact Me!</a>
            </button>
          </a>
          <div className="container-redes">
            <div className="red">
              <a href="https://github.com/Tintaa307">
                <i class="ri-github-line"></i>
              </a>
            </div>
            <div className="red">
              <a href="">
                <i class="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container-img">
          <img src={Imagen} alt="" />
          <div className="card-react">
            <h2>REACT</h2>
            <div className="icon">
              <i class="ri-reactjs-line"></i>
            </div>
            <div className="lines">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
              <div className="line4"></div>
              <div className="line5"></div>
            </div>
          </div>
          <div className="card-native">
            <h2>
              REACT <br /> NATIVE
            </h2>
            <div className="icon1">
              <i class="ri-apple-fill"></i>
            </div>
            <div className="icon2">
              <i class="ri-android-fill"></i>
            </div>
            <div className="lines">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
              <div className="line4"></div>
              <div className="line5"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
