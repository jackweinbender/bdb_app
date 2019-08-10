import React from 'react'
import { Link } from 'gatsby'

export default ({ root }) => {
    const link_to = `/page/${root.page}`
    return <Link to={link_to}>{root.root}</Link>
}
