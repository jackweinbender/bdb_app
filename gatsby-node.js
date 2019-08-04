const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    return graphql(`
    {
        allPagesJson {
            edges {
                node {
                    pagenum
                }
            }
        }
    }
    `).then(result => {
        result.data.allPagesJson.edges.forEach(({ node }) => {
            createPage({
              path: `page/${node.pagenum}`,
              component: path.resolve(`./src/components/page.js`),
              context: { pagenum: `${node.pagenum}` },
            })
          })
    })
  }