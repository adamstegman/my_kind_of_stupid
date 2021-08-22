module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: 'My Kind of Stupid',
    description: 'Web development, user interfaces, and other development topics.',
    siteUrl: 'http://blog.adamstegman.com'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },

    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            output: "/feed.xml",
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                      }
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            `,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Kind of Stupid`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0288D1`,
        display: `browser`,
        icon: `src/assets/atom.png`,
      },
    },
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

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sharp',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of the content container as this plugin uses this
              // as the base for generating different widths of each image.
              maxWidth: 960,
              // Remove the default behavior of adding a link to each image.
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
