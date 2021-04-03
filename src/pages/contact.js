  
import React from "react"
import Link from 'gatsby-link'

import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout>
            <div className="formWrapper">
                
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact"></input>
                <input type="text" name="name" placeholder="Name" /> 
                <input type="email" name="email" placeholder="Name" />
                <textarea name="message" placeholder="Enter your message"></textarea>
                <button type="submit">Send</button>
            </form>
           



            </div>
        </Layout>
    )
}

export default contactPage