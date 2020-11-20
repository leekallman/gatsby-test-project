import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

  return (
  <header className={headerStyles.header}>
    <h1>
      <Link className={headerStyles.title}to ="/">{data.site.siteMetadata.title}
      </Link>
    </h1>
    <nav>
      <ul className={headerStyles.navList}>
      <Link className= {headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link> <br />
      <Link className= {headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about/">About</Link> <br />
      <Link className= {headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog/">Blog</Link> <br />
      <Link className= {headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact/">Contact</Link> <br />
      </ul>
     </nav>
  </header>
  )
}
  
  export default Header
  