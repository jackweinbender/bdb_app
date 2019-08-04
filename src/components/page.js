import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  const page = data.pagesJson
  const title = `BDB Page ${page.pagenum}`
  const next = `/page/${page.next}`
  const prev = `/page/${page.prev}`
  const img_crop = page.img_crop || "pct:9,2,82,96"

  let url = `http://iiif.semitics-archive.org/iiif/2/bdb_emory_page-${page.pagenum}.jp2/${img_crop}/pct:60/0/gray.jpg`
  
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query($pagenum: String) {
    pagesJson(pagenum: { eq: $pagenum }) {
      pagenum
      next
      prev
      emory_page
      img_crop
    }
  }
`
