/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"


const Layout = (props) => {
  
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
      </div>
  )
}

export default Layout
