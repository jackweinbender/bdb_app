import React from "react"
// import { Link } from "gatsby"

import Layout from "../templates/layout"
import SectionNav from "../components/SectionNav"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionNav />
  </Layout>
)

export default IndexPage
