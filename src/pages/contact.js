  
import React from "react"
import Link from 'gatsby-link'

import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout>
            <div className="formWrapper">
            <form data-netlify="true" hidden name="contact" netlify-honeypot="bot-field">
            <input type="text" name="username" />
            <input type="email" name="email" />
            <input name="bot-field" type="hidden" />
            </form>
            </div>
        </Layout>
    )
}

export default contactPage