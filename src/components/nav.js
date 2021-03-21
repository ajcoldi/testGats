import React from 'react'
import Link from 'gatsby-link'

import './nav.scss'

const Nav = () => {
    return (
        <nav >
            <img className="hBMenu" src="/images/hamburgerMenu.png" alt="Menu"></img>
            <ul id="navBar">
                <li><Link activeClassName="activeNavItem" to="/">HOME</Link></li>
                <li><Link activeClassName="activeNavItem" to="/skills">SKILLS</Link></li>
                <li><Link activeClassName="activeNavItem" to="/projects">PROJECTS</Link></li>
                <li><Link activeClassName="activeNavItem" to="/contact">CONTACT</Link></li>
                <li><Link activeClassName="activeNavItem" to="/blog">BLOG</Link></li>
            </ul>
        </nav>
    ) 
} 

export default Nav