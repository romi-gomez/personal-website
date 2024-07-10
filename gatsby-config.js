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
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": `${__dirname}/src/assets/images/icon.png`
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/assets/images/`
      },
      __key: "images"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`, // Path to your data files
      },
    },
    `gatsby-transformer-remark`,
  ]
};