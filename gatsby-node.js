const path = require(`path`)
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogList = path.resolve(`./src/templates/blog-list.js`)

  return graphql(
    `
      {
        allContentfulBlog (
          sort: { fields: [date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              content {
                content
              }
              title
              tags {
                tagName
              }
              date(formatString: "DD [<span>] MMMM [</span>]")
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulBlog.edges

    posts.forEach((post, index) => {
      const previous = ind