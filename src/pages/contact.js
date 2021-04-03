  
import React from "react"
import Link from 'gatsby-link'

import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout>
            <div className="formWrapper">
            
            <form name="contactForm" data-netlify="true" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contactForm" />
                <p>
                <label>
                    Your Name: <input type="text" name="name" value={fullName} onChange={(e)=>handleFullName(e.target.value)} />
                </label>
                </p>
                <p>
                <label>
                    Your Email: <input type="email" name="email" value={email} onChange={(e)=>handleEmail(e.target.value)} />
                </label>
                </p>
                <p>
                <label>
                    Message: <textarea name="message" value={message} onChange={(e)=>handleMessage(e.target.value)} />
                </label>
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