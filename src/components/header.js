import React from "react"
import {Link} from "gatsby"

const Header = () => {
  return (
  <header>
    <h1>Lisas Gatsby site</h1>
    <div>
      <Link to="/about/">About</Link> <br />
      <Link to="/blog/">Blog</Link> <br />
     <Link to="/contact/">Contact</Link> <br />
    </div>
  </header>
  )
}
  
  export default Header
  