import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

const Footer = () => { 
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
    return (
        <footer>
            <Link to="/">Back to the homepage</Link>
            <p>All rights reserved.
            © {new Date().getFullYear()}, Created by {data.site.siteMetadata.author}
            </p>
        </footer>
    )
}
    

export default Footer