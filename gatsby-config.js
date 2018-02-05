module.exports = {
  siteMetadata: {
    title: 'My Kind of Stupid',
    description: 'Web development, user interfaces, and other development topics.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        dir: './src/assets',
      },
    },
  ],
};
