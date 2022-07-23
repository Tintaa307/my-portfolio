import { useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import ScrollReveal from "scrollreveal"

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "100px",
      duration: 1000,
      delay: 500,
    })

    sr.reveal(`
      #ContentH,
      #ContentA,
      #ContentS,
      #ContentP,
      #ContentC
    `)
  }, [])
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
