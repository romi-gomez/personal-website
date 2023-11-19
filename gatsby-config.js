/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Romi Gomez personal website`,
    description: `A personal website for Romi Gomez`,
    twitterHandle: "ibaslogic",
    author: "Romi Gomez",
    url: "https://romigomez.com"
   },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `audio`,
      path: `./src/artwork/audio/`,
    },
    __key: "audio"
  }
]
};