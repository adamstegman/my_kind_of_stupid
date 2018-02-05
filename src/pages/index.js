import React from 'react';
import Link from 'gatsby-link';

import Container from '../components/Container';
import Post from '../components/Post';
import styles from './index.module.css';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.reduce((acc, { node }) => acc.concat(node), []);

  return (
    <Container>
      <ol className={styles['article-list']}>
        {posts.map((post, index) => (
          <li key={index} className={styles['article-item']}>
            <Post post={post} />
            <Link className={styles.permalink} to={post.fields.post.slug}>Permalink</Link>
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default IndexPage;

export const query = graphql`
  query ArticlesQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___created_at], order: DESC }) {
      edges {
        node {
          html
          fields {
            post {
              slug
              title
              link
              createdAtTimestamp: createdAt
              createdAt(formatString: "MMMM D, YYYY h:mma z")
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
