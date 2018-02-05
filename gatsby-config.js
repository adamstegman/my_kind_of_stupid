module.exports = {
  siteMetadata: {
    title: 'My Kind of Stupid',
    description: 'Web development, user interfaces, and other development topics.',
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
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: "./src/assets/atom.png",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true,
        },
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
