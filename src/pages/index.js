import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to my new Gatsby site.</p>
      <p>Have a look around</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
    )
  }
  
  export default IndexPage
  