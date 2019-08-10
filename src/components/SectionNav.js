import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import SectionNavList from "../components/SectionNavList"

import "./SectionNav.css"

class SectionNav extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentSection: 'hebrew'
    }
  }
  setSection = (e) => {
    this.setState({ currentSection: e })
  }
  render() {
    const { data } = this.props
    return (
      <nav className="section-nav">
        <SectionNavList 
          items={data.sections.edges} 
          currentSection={this.state.currentSection}
        />
        <button onClick={() => this.setSection('aramaic') }>Test</button>
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
export default () => (
  <StaticQuery query={query} render={data => <SectionNav data={data} />} />
)
