import React from "react"
import { Link } from "gatsby"

import "../components/SectionNavListItem.css"

const SectionNavListItem = ({ item, currentSection }) => {
  // Check to see if the node is the current section
  const isCurrentSelection = currentSection == item.slug ? 'current' : ''
  
  return (
    <li className="section-nav_li">
      <Link to={`/page/${item.start_page}`} className={isCurrentSelection}>
        {item.display}
      </Link>
    </li>
  )
}

export default SectionNavListItem
