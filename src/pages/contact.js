import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Contact = () => {
    return (
        <Layout>
        <SEO title="Contact" />
        <h1>Say Hi</h1>
        <p>You can contact me at</p>
        
        <a href="linkedin/lisaleekallman">Linkedin</a><br />
        <a href="github.com/leekallman">Github</a><br />
        <a href="instagram/lisaleel">Insta</a><br />
        <a href="mailto:lisaleekallman@gmail.com">lisaleekallman@gmail.com</a>
        <br />
        </Layout>
        )
    }
    export default Contact