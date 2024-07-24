/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Romi Gomez personal website`,
    description: `A personal website for Romi Gomez`,
    twitterHandle: "ibaslogic",
    author: "Romi Gomez",
    siteUrl: "https://romigomez.com",
    url: "https://romigomez.com"
  },
  plugins: [
    // Styled-components for CSS-in-JS
    "gatsby-plugin-styled-components",

    // Gatsby image handling
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    // Sitemap generation
    "gatsby-plugin-sitemap",

    // Manifest for PWA support
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `${__dirname}/src/assets/images/icon.png`,
      },
    },

    // Source filesystem for images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "artworkImages",
        path: `${__dirname}/src/assets/artwork/images/`,
      },
      __key: "artworkImages",
    },

    // Source filesystem for data
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },

    // Transformer for Markdown files
    `gatsby-transformer-remark`,
  ],
};