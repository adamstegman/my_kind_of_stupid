import React from 'react';
import { Link, graphql } from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Post from '../components/Post';
import styles from './index.module.css';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.reduce((acc, { node }) => acc.concat(node), []);

  return (
    <Layout>
      <Container>
        <ol className={styles.articleList}>
          {posts.map((post, index) => (
            <li key={index} className={styles.articleItem}>
              <Post post={post} />
              <Link className={styles.permalink} to={post.fields.slug}>Permalink</Link>
            </li>
          ))}
        </ol>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          fields {
            slug
            post {
              title
              link
              timestamp: date
              date(formatString: "MMMM D, YYYY h:mma z")
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
