  
import React from "react"
import Link from 'gatsby-link'

import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout>
            <div className="formWrapper">
                <form method="POST" action="/thank-you/english.html" name="contactform" data-netlify="true"  data-netlify-honeypot="bot-field" enctype="application/x-www-form-urlencoded" >
                    <input type="text" name="name" placeholder="Name"></input>
                    <input type="email" name="email" placeholder="Email"></input>
                    <input type="number" name="number" placeholder="Phone"></input>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit"> Send</button>
                </form>
            </div>
        </Layout>
    )
}

export default contactPage