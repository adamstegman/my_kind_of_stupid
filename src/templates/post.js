import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Post from '../components/Post';

export default ({ data }) => (
  <Layout>
    <Container>
      <Helmet title={`${data.markdownRemark.fields.post.title} - Adam Stegman`}></Helmet>
      <Post post={data.markdownRemark} />
    </Container>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        post {
          title
          link
          timestamp: date
          date(formatString: "MMMM D, YYYY h:mma z")
        }
      }
    }
  }
`;
