import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import Footer from '../Footer';

const TemplateWrapper = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
          ]}
        />
        <Header title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.description} />
        {children}
        <Footer />
      </div>
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.any,
}

export default TemplateWrapper
