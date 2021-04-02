  
import React from "react"
import Link from 'gatsby-link'

import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout>
            <div className="formWrapper">
            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label><input type="text" name="name" placeholder="name" /></label>   
                </p>
                <p>
                    <label><input type="email" name="email" placeholder="email" /></label>
                </p>
                <p>
                    <label><textarea name="message" placeholder="Enter message here"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
                </form>
            </div>
        </Layout>
    )
}

export default contactPage