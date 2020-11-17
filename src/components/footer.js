import React from "react"
import {Link} from "gatsby"

const Footer = () => { 
    return (
        <footer>
            <Link to="/">Back to the homepage</Link>
            <p>All rights reserved.
            © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
            </p>
        </footer>
    )
}
    

export default Footer