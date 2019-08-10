import React from "react"
import SectionNavListItem from "./SectionNavListItem"

import "../components/SectionNavList.css"

const SectionNavList = ({ items }) => {
  const itemsList = items.map(({ node }) => <SectionNavListItem item={node} />)
  return <ol class="section-nav_list">{itemsList}</ol>
}

export default SectionNavList
