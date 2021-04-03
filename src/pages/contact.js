  
import React from "react"
import Link from 'gatsby-link'

import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout>
            <div className="formWrapper">
                
            <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact"></input>
            <p>
                <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
                </select></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
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