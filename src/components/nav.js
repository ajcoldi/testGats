import React, { useState } from "react"
import Link from 'gatsby-link'

import './nav.scss'

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }
    return (
        <nav >
            
            
          <div onClick={handleToggle} className="hBMenu">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
          </div>
            <ul id="navBar" className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <li><Link activeClassName="activeNavItem" to="/">HOME</Link></li>
                <li><Link activeClassName="activeNavItem" to="/skills">SKILLS</Link></li>
                <li><Link activeClassName="activeNavItem" to="/projects">PROJECTS</Link></li>
                <li><Link activeClassName="activeNavItem" to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    ) 
} 

export default Nav