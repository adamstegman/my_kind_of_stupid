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
    const slug = createFilePath({ node, getNode, basePath: 'posts' }).slice(0, -1);
    const post = {
      slug: `${slug}.html`,
      title: node.frontmatter.title,
      link: node.frontmatter.link,
      createdAt: node.frontmatter.created_at,
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
              post {
                slug
              }
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
        path: node.fields.post.slug,
        component: postTemplate,
        context: { slug: node.fields.post.slug },
      })
    });
  });
};
