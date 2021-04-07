  
import React from "react"
import Link from 'gatsby-link'

import Layout from '../components/layout'
import "../styles/projects.scss"

const projectPage = () => {
    return (
        <Layout>
    
    <h2>Web Development</h2>
        <hr/>
        <div className="projectsWrapper">


        
        
       
        <div className="gallery-wrapper">
            <div className="project">
                <div className="image-wrapper">
                    <a href="#lightbox-image-1">
                        <img src="/images/projects/webDevItalian-small.jpg" alt="" />
                    </a>
                </div>
                <div className="projectText">
                    <h3>Resturant Webpage</h3>
                    <p>This webpage was designed and built by me using Photoshop, vanilla CSS, JsFiddle and Jquery.</p>
                    <div className="projectTextBtn">
                      
                      <a target="_blank" href="https://ajcoldi.github.io/TakeawayProject/index.html"><button className="visitPageBtn">Visit Webpage</button></a>
                      <a href="#"><button className="viewCodeBtn">View code</button></a>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="#lightbox-image-2">
                        <img href="/images/projects/webDevAdventure-small.jpg" src="/images/projects/webDevAdventure-small.jpg" alt=""></img>
                    </a>
                </div>
                <div className="projectText">
                    <h3>Resturant Webpage</h3>
                    <p>This webpage was designed and built by me using Photoshop, vanilla CSS, JsFiddle and Jquery.</p>
                    <div className="projectTextBtn">
                      
                      <a target="_blank" href="https://ajcoldi.github.io/TakeawayProject/index.html"><button className="visitPageBtn">Visit Webpage</button></a>
                      <a href="#"><button className="viewCodeBtn">View code</button></a>
                    </div>
                </div>
            </div>
            </div>


            <h2>Web Designs</h2>
        <hr/>
            <div className="gallery-wrapper">
            <div className="project">
                <div className="image-wrapper">
                    <a href="#lightbox-image-3">
                        <img src="/images/projects/webDesIpod-small.jpg" alt="" />
                    </a>
                </div>
                <div className="projectText">
                    <h3>Resturant Webpage</h3>
                    <p>This webpage was designed and built by me using Photoshop, vanilla CSS, JsFiddle and Jquery.</p>
                </div>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="#lightbox-image-4">
                        <img src="/images/projects/webDesBostonD-small.jpg" alt="" />
                    </a>
                </div>
                <div className="projectText">
                    <h3>Resturant Webpage</h3>
                    <p>This webpage was designed and built by me using Photoshop, vanilla CSS, JsFiddle and Jquery.</p>
                </div>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="#lightbox-image-5">
                        <img src="/images/projects/webDesFurniture-small.jpg" alt="" />
                    </a>
                </div>
                <div className="projectText">
                    <h3>Resturant Webpage</h3>
                    <p>This webpage was designed and built by me using Photoshop, vanilla CSS, JsFiddle and Jquery.</p>
                </div>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="#lightbox-image-6">
                        <img src="/images/projects/webDesDeep-small.jpg" alt="" />
                    </a>
                </div>
                <div className="projectText">
                    <h3>Resturant Webpage</h3>
                    <p>This webpage was designed and built by me using Photoshop, vanilla CSS, JsFiddle and Jquery.</p>
                </div>
            </div>
      </div>
        
      <h2>Art Work</h2>
        <hr/>

      <div className="gallery-wrapper">
            <div className="project">
                <div className="image-wrapper">
                    <a href="#lightbox-image-7">
                    <img src="/images/projects/artTaxiDriver-small.jpg" alt=""></img>
                    </a>
                </div>
                <div className="projectText">
                    <h3>Resturant Webpage</h3>
                    <p>This webpage was designed and built by me using Photoshop, vanilla CSS, JsFiddle and Jquery.</p>
                </div>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="#lightbox-image-8">
                    <img src="/images/projects/artNoirStreet-small.jpg" alt=""></img>
                    </a>
                </div>
                <div className="projectText">
                    <h3>Resturant Webpage</h3>
                    <p>This webpage was designed and built by me using Photoshop, vanilla CSS, JsFiddle and Jquery.</p>
                </div>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="#lightbox-image-9">
                    <img src="/images/projects/artMoon-small.jpg" alt=""></img>
                    </a>
                </div>
                <div className="projectText">
                    <h3>Resturant Webpage</h3>
                    <p>This webpage was designed and built by me using Photoshop, vanilla CSS, JsFiddle and Jquery.</p>
                </div>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="#lightbox-image-10">
                    <img src="/images/projects/artMonkey-small.jpg" alt=""></img>
                    </a>
                </div>
                <div className="projectText">
                    <h3>Resturant Webpage</h3>
                    <p>This webpage was designed and built by me using Photoshop, vanilla CSS, JsFiddle and Jquery.</p>
                </div>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="#lightbox-image-11">
                    <img src="/images/projects/artHelmet-small.jpg" alt=""></img>
                    </a>
                </div>
                <div className="projectText">
                    <h3>Resturant Webpage</h3>
                    <p>This webpage was designed and built by me using Photoshop, vanilla CSS, JsFiddle and Jquery.</p>
                </div>
            </div>
        </div>








        </div>
        <div className="gallery-lightboxes">

        <div className="image-lightbox" id="lightbox-image-1">
          <div className="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-11" class="arrow-left"></a>
            <a href="#lightbox-image-2" class="arrow-right"></a>
            <img src="/images/projects/webDevItalian-large.jpg" alt="" />
          </div>
        </div>
        
        <div className="image-lightbox" id="lightbox-image-2">
          <div className="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-1" class="arrow-left"></a>
            <a href="#lightbox-image-3" class="arrow-right"></a>
            <img src="/images/projects/webDevAdventure-large.jpg" alt="" />
          </div>
        </div>



        <div className="image-lightbox" id="lightbox-image-3">
          <div className="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-2" class="arrow-left"></a>
            <a href="#lightbox-image-4" class="arrow-right"></a>
            <img src="/images/projects/webDesIpod-large.jpg" alt="" />
          </div>
        </div>
        <div className="image-lightbox" id="lightbox-image-4">
          <div className="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-3" class="arrow-left"></a>
            <a href="#lightbox-image-5" class="arrow-right"></a>
            <img src="/images/projects/webDesBostonD-large.jpg" alt="" />
          </div>
        </div>
        <div className="image-lightbox" id="lightbox-image-5">
          <div className="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-4" class="arrow-left"></a>
            <a href="#lightbox-image-6" class="arrow-right"></a>
            <img src="/images/projects/webDesFurniture-large.jpg" alt="" />
          </div>
        </div>
        <div className="image-lightbox" id="lightbox-image-6">
          <div className="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-5" class="arrow-left"></a>
            <a href="#lightbox-image-7" class="arrow-right"></a>
            <img src="/images/projects/webDesDeep-large.jpg" alt="" />
          </div>
        </div>



        <div className="image-lightbox" id="lightbox-image-7">
          <div className="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-6" class="arrow-left"></a>
            <a href="#lightbox-image-8" class="arrow-right"></a>
            <img src="/images/projects/artTaxiDriver-small.jpg" alt="" />
          </div>
        </div>
        <div className="image-lightbox" id="lightbox-image-8">
          <div className="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-7" class="arrow-left"></a>
            <a href="#lightbox-image-9" class="arrow-right"></a>
            <img src="/images/projects/artNoirStreet-small.jpg" alt="" />
          </div>
        </div>
        <div className="image-lightbox" id="lightbox-image-9">
          <div className="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-8" class="arrow-left"></a>
            <a href="#lightbox-image-10" class="arrow-right"></a>
            <img src="/images/projects/artMoon-small.jpg" alt="" />
          </div>
        </div>
        <div className="image-lightbox" id="lightbox-image-10">
          <div className="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-9" class="arrow-left"></a>
            <a href="#lightbox-image-11" class="arrow-right"></a>
            <img src="/images/projects/artMonkey-small.jpg" alt="" />
          </div>
        </div>
        <div className="image-lightbox" id="lightbox-image-11">
          <div className="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-10" class="arrow-left"></a>
            <a href="#lightbox-image-1" class="arrow-right"></a>
            <img src="/images/projects/artHelmet-small.jpg" alt="" />
          </div>
        </div>
       
        </div>
        </Layout>
    )
}

export default projectPage