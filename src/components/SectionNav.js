import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import SectionNavList from "../components/SectionNavList"

import "./SectionNav.css"

class SectionNav extends Component {
  render() {
    const { data, currentSection } = this.props
    return (
      <nav className="section-nav">
        <SectionNavList 
          items={data.sections.edges} 
          currentSection={currentSection}
        />
      </nav>
    )
  }
}
const query = graphql`
  query Sections {
    sections: allSectionsJson {
      edges {
        node {
          slug
          display
          id
          start_page
        }
      }
    }
  }
`
export default ({ currentSection }) => (
  <StaticQuery 
    query={query} 
    render={ data => (
      <SectionNav data={data} currentSection={currentSection} />
    )}
  />
)
