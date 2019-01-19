module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `I'm a UI Developer with a strong motivation for build beautiful user interfaces from the scratch to the final stage.`,
    author: `@henrikemacedo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/images/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/images/portfolio`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
