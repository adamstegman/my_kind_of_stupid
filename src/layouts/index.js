import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
require("prismjs/themes/prism-okaidia.css");

import Header from '../components/Header';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
      ]}
    />
    <Header title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.description} />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`