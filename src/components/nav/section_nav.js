import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default data => {
  const query = graphql`
    query Sections {
      sections: allSectionsJson {
        edges {
          node {
            slug
            display
            id
          }
        }
      }
    }
  `
  const render = data => {
    const sections = data.sections.edges.map(({ node }) => {
      return <div>{node.display}</div>
    })
    return sections
  }
  return <StaticQuery query={query} render={render} />
}
