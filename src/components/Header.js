import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../components/Header.css"

const handleSearchClick = (e) => {
  // console.log(e)
  // e.preventDefault()
}
const toggleRoots = (e) => {
  e.preventDefault()
  console.log(e)
}
const toggleSections = (e) => {
  e.preventDefault()
  console.log(e)
}
const Header = ({ siteTitle }) => (
  <header className="site-header">
      <button
        onClick={toggleRoots}>א</button>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <button
        onClick={toggleSections}>§</button>
      {/* <form className="search-bar">
        <input type="text" />
        <button 
          type="submit"
          onClick={handleSearchClick}
        >Find</button>
      </form> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
