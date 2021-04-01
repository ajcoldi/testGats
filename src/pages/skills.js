  
import React from "react"
import Link from 'gatsby-link'

import Layout from '../components/layout'

const skillsPage = () => {
    return (
        <Layout>
            
            
                <div className="skillsWrapper">



                    <div className="skillsText"> 
                        <div className="skill">
                            <h3>HTML</h3>
                            <p>html 4.6 - 5 / Validation</p>
                        </div>
                        <div className="skill">
                            <h3>CSS</h3>
                            <p>Grids / Flex / Bootstrap / SASS </p>
                        </div>
                        <div className="skill">
                            <h3>JAVASCRIPT/JQUERY</h3>
                            <p>OOP / UI / Form Validation / API's</p>
                        </div>
                        <div className="skill">
                            <h3>LIGHTBOX</h3>
                        </div>
                        <div className="skill">
                            <h3>REACT/GATSBY</h3>
                            <p>Components and Modules / Headless CMS / Plugins</p>
                        </div>
                        <div className="skill">
                            <h3>GIT</h3>
                        </div>
                    </div>
                   
                    <div className="knowOf">
                        <h3 className="KOTitle">Knowledge Of:</h3>
                            <div className="skill">
                                <h3>PHP</h3>
                                <p>PDO - MVC / validation / Security / xampp</p>
                            </div>
                            <div className="skill">
                                <h3>SQL</h3>
                            </div>
                            <div className="skill">
                                <h3>GRAPHQL</h3>
                            </div>
                            <div className="skill">
                                <h3>XAMPP</h3>
                            </div>
                            <div className="skill">
                                <h3>NPM</h3>
                            </div>
                            
                    </div>
                    
                </div> 
                <div className="stackIcons">
                                <img id="img1" src="images/stackIcons/htmlIcon.png" alt="css3"></img>
                                <img id="img2" src="images/stackIcons/cssIcon.png" alt="css3"></img>
                                <img id="img3" src="images/stackIcons/javascriptIcon.png" alt="css3"></img>
                                <img id="img4" src="images/stackIcons/jqueryIcon.png" alt="css3"></img>
                                <img id="img5" src="images/stackIcons/reactIcon.png" alt="css3"></img>
                                <img id="img6" src="images/stackIcons/gatsbyIcon.png" alt="css3"></img>
                                <img id="img7" src="images/stackIcons/phpIcon.png" alt="css3"></img>
                            </div>
            
        </Layout>
    )
}

export default skillsPage