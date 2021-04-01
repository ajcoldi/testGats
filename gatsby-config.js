/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/GatsbyPort",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'roboto mono', 'muli\:400,400i,700,700i',
        ],
        display: 'swap'
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}

