import React from "react"
import { StaticQuery, graphql } from "gatsby"
import RootsList from './roots_list'

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
    return data.hebrew.letters.map(({ node }) => {
      return (
        <div>
          <h3>{node.char}</h3>
          <RootsList roots={node.roots} />
        </div>
      )
    })
  }
  
  return <StaticQuery query={query} render={render} />
}