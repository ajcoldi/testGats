  
import React from "react"
import Link from 'gatsby-link'

import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout>
        <h1>contact</h1>
        <form>
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Phone"></input>
            <textarea placeholder="Message"></textarea>
            <button type="button"> Send</button>
        </form>
        </Layout>
    )
}

export default contactPage