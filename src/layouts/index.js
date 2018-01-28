import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Adam Stegman"
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
