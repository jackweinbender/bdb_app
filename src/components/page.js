import React from "react"
import { graphql } from "gatsby"

import Layout from "../templates/layout"
import SectionNav from "../components/SectionNav"
// import LetterNav from "../components/nav/letter_nav"
import SEO from "../components/seo"

export default ({ data }) => {
  const page = data.page
  const title = `BDB Page ${page.slug}`
  return (
    <Layout>
      <SEO title={title} />
      <SectionNav 
        currentSection={page.section}
      />
      {/* <LetterNav /> */}

      <h1>{title}</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

export const query = graphql`
  query Page($slug: String) {
    page: pagesJson(slug: { eq: $slug }) {
      slug
      section
      # next
      # prev
      # emory_page
      # img_crop
    }
  }
`
