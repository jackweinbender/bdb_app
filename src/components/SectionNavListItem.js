import React from "react"
import { Link } from "gatsby"

import "../components/SectionNavListItem.css"

const SectionNavListItem = ({ item }) => (
  <li className="section-nav_li">
    <Link to={`/page/${item.start_page}`}>{item.display}</Link>
  </li>
)

export default SectionNavListItem
