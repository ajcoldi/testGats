import React from 'react'
import Nav from './nav'
import { withPrefix, Link } from "gatsby"
import ContentWrap from './contentWrap'
import Helmet from "react-helmet"

import './layout.scss'
import '../styles/index.scss'
import '../styles/skills.scss'
import '../styles/contact.scss'
const Layout = (props) => {
    return (
        <div>
             <Helmet>
                <script src={withPrefix('script.js')} type="text/javascript" />
            </Helmet>
            <div className="githubBanner"><Link to="https://github.com/ajcoldi"><div className="githubLink"></div></Link></div>
            <Nav />
            <ContentWrap>
            {props.children}
            </ContentWrap>
            <div className="btmLeftCorner"></div>
        </div> 
    )
}

export default Layout