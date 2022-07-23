import React, { useState } from "react"
import "./nav.css"

const links = [
  {
    name: "About Me",
    href: "#About",
    icon: "ri-newspaper-line",
  },
  {
    name: "Projects",
    href: "#Projects",
    icon: "ri-briefcase-3-line",
  },
  {
    name: "Contact",
    href: "#Contact",
    icon: "ri-mail-send-line",
  },
]

const Nav = () => {
  const [navbar, setNavbar] = useState("")

  const onScroll = () => {
    if (window.scrollY > 250) {
      setNavbar("active")
    } else {
      setNavbar("")
    }
  }

  window.addEventListener("scroll", onScroll)

  return (
    <header className={["header-container", navbar].join(" ")}>
      <nav className="container-nav">
        <ul className="nav-list">
          {links.map(({ name, href, icon }, index) => {
            return (
              <li className="nav-item" key={index}>
                <a href={href} className="nav-link">
                  {name} <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="container-logo">
        <a href="#Home">
          <i class="fa-brands fa-vimeo-v"></i>
        </a>
      </div>
    </header>
  )
}

export default Nav
