  
import React from "react"
import Link from 'gatsby-link'
import Layout from '../components/layout'


const indexPage = () => {
    return (
        <Layout>
            <div className="homeWrapper">
                <div className="homeAbout">
                    <h2>About Me</h2>
                    <p>Hi, I'm Alex. Hull based Web developer and I love what I do! 
                    <br/>From complex projects using frameworks like React or vue, to rapid deployment of small scale CSS projects, my workflow is streamlined and my prices are competitive.
                    If you have any queries then please feel free to <Link to="/contact">get in touch</Link></p>   
                </div>
                <div className="homeHeader">
                    <div className="headerTxt">
                        <h1>ALEX JAMES</h1>
                        <h2>FRONT END WEB DEVELOPER</h2>
                    </div>
                    <div className="linkedInWrap">
                        <Link to="https://www.linkedin.com/in/alex-james-9263a51ab/"><div className="linkedinLink"></div></Link>
                    </div>
                    <div className="gitHubWrap">
                        <Link to="https://github.com/ajcoldi"><div className="githubLink"></div></Link>
                    </div>
                    
                </div>
                    
            </div>
        </Layout>
    )
}

export default indexPage