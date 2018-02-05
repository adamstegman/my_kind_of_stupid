import React from 'react';

import Container from '../components/Container';
import styles from './index.module.css';

const IndexPage = ({ data }) => (
  <Container>
  </Container>
);

export default IndexPage;

export const query = graphql`
  query AboutMeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
