const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allPagesJson {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
      result.data.allPagesJson.edges.forEach(({ node }) => {
        createPage({
          path: `page/${node.slug}`,
          component: path.resolve(`./src/components/page.js`),
          context: { slug: `${node.slug}` },
        })
      })
    })
  }
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type LettersJson implements Node {
      sort: Int
      language: String,
      char: String,
      translit: String,
      name: String,
      roots: [RootsJson] @link(by: "letter", from: "sort")
    }
  `
  createTypes(typeDefs)
}