import React from 'react';
import Helmet from 'react-helmet';

import Container from '../components/Container';
import Post from '../components/Post';

export default ({ data }) => (
  <Container>
    <Helmet title={`${data.markdownRemark.fields.post.title} - Adam Stegman`}></Helmet>
    <Post post={data.markdownRemark} />
  </Container>
)

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { post: { slug: { eq: $slug } } }) {
      html
      fields {
        post {
          title
          link
          createdAtTimestamp: createdAt
          createdAt(formatString: "MMMM D, YYYY h:mma z")
        }
      }
    }
  }
`;
