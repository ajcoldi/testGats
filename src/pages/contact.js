  
import React from "react"
import Link from 'gatsby-link'

import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout>
      
        <form name="contact" method="POST" data-netlify="true">
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Phone"></input>
            <textarea placeholder="Message"></textarea>
            <button type="submit"> Send</button>
        </form>
        </Layout>
    )
}

export default contactPage