/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    // trim trailing slash from slug
    const slugPath = createFilePath({ node, getNode, basePath: 'posts' }).slice(0, -1);
    const slug = `${slugPath}.html`;
    createNodeField({ node, name: 'slug', value: slug });
    const post = {
      title: node.frontmatter.title,
      link: node.frontmatter.link,
      date: node.frontmatter.date,
    };
    createNodeField({ node, name: 'post', value: post });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const postTemplate = path.resolve('src/templates/post.js');
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: { slug: node.fields.slug },
      })
    });
  });
};
