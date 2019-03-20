module.exports = {
  siteMetadata: {
    title: `Henrique Macedo — UI Developer`,
    description: `I'm a UI Developer with a strong motivation for build beautiful user interfaces from the scratch to the final stage.`,
    author: `@henrikemacedo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://henriquemacedo.pt',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
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
        name: `Hello.`,
        short_name: `Hello.`,
        start_url: `/`,
        background_color: `#1d252c`,
        theme_color: `#1d252c`,
        display: `standalone`,
        icon: `src/images/icons/icon.png`,
      },
    },
    // 'gatsby-plugin-offline',
  ],
}
