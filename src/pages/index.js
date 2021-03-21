  
import React from "react"
import Link from 'gatsby-link'
import Layout from '../components/layout'

const indexPage = () => {
    return (
        <Layout>
            <div className="homeWrapper">
                <div className="homeAbout">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>   
                </div>
                <div className="homeHeader">
                    <div className="headerTxt">
                        <h1>ALEX JAMES</h1>
                        <h2>FRONT END WEB DEVELOPER</h2>
                    </div>
                    <div className="linkedInWrap">
                        <Link to="/"><div className="linkedinLink"></div></Link>
                    </div>
                    
                </div>
                    
            </div>
        </Layout>
    )
}

export default indexPage