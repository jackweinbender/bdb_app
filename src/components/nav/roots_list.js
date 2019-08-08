import React from 'react'
import RootNavItem from './root_nav_item';

export default function roots_list({ roots }) {
    return roots.map( root => {
        return <RootNavItem root={root} />
    })
}
