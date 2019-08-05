import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => {
  const query = graphql`
    query RootsByLetter {
      hebrew: allLettersJson(filter: {language: {eq: "hebrew"}}) {
        letters: edges {
          node {
            id
            char
            language
            name
            sort
            roots {
              id
              letter
              page
              root
              sort_order
            }
          }
        }
      }
      aramaic: allLettersJson(filter: {language: {eq: "aramaic"}}) {
        letters: edges {
          node {
            id
            char
            language
            name
            sort
            roots {
              id
              letter
              page
              root
              sort_order
            }
          }
        }
      }
    }
  `
  const render = data => {
    const nav = data.hebrew.letters.map(({node}) => {
      const roots = node.roots.map( r => (<div>{r.root}</div>))
      return (
        <div>
          <div>{node.char}</div>
          <div>{roots}</div>
        </div>
      )
    })
    // return <pre>{JSON.stringify(data, null, 2)}</pre>
    return <div>{nav}</div>
  }

  return <StaticQuery query={query} render={render} />
}