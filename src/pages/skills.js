  
import React from "react"
import Link from 'gatsby-link'

import Layout from '../components/layout'

const skillsPage = () => {
    return (
        <Layout>
            
            <h1>skills:</h1>
                <div className="skillsWrapper">
                    <div className="skillsText"> 
                        <div className="skill">
                            <h3>HTML</h3>
                            <p>html 4.6 - 5 / Validation</p>
                        </div>
                        <div className="skill">
                            <h3>CSS</h3>
                            <p>Flexbox / Grids / Media queries / Animations</p>
                        </div>
                        <div className="skill">
                            <h3>JAVASCRIPT/JQUERY</h3>
                            <p>OOP / General UI / Form Validation / API's</p>
                        </div>
                        <div className="skill">
                            <h3>REACT/GATSBY</h3>
                        </div>
                    </div>
                   
                    <div className="knowOf">
                        <h3 className="KOTitle">Knowledge Of:</h3>
                            <div className="skill">
                                <h3>PHP</h3>
                                <p>PDO - MVC / validation / Security / xampp</p>
                            </div>
                            <div className="skill">
                                <h3>Angular</h3>
                                <p>presets / portability / Environment</p>
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