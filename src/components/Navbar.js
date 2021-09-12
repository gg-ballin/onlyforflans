import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Only For Flans.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>
              
              <span role="img" aria-label="Emoji">
              🧳
              </span>
              
            
            </button>
            <button onClick={() => scrollTo("#about")}><span role="img" aria-label="Emoji">
              🙋🏽‍♂️
              </span></button>
            <button onClick={() => scrollTo("#contact")}><span role="img" aria-label="Emoji">
              📩
              </span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
