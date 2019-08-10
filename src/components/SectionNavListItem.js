import React from "react"
import { Link } from "gatsby"

import "../components/SectionNavListItem.css"

const SectionNavListItem = ({ item, currentSection }) => {
  // Check to see if the node is the current section
  const isCurrentSelection = currentSection == item.slug ? 'current' : ''
  const path = `/page/${item.start_page}`
  return (
    <li className="section-nav_li">
      <Link to={path} className={isCurrentSelection}>
        {item.display}
      </Link>
    </li>
  )
}

export default SectionNavListItem
