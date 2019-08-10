import React from "react"
import SectionNavListItem from "./SectionNavListItem"

import "../components/SectionNavList.css"

const SectionNavList = ({ items, currentSection }) => {
  const itemsList = items.map(({ node }) => (
    <SectionNavListItem 
      item={node}
      key={node.slug}
      currentSection={currentSection}
    />
  ))
  return <ol className="section-nav_list">{itemsList}</ol>
}

export default SectionNavList
