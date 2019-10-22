require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cognitive`,
    description: `Cognitive website`,
    author: `@gpietro`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `ssut`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => doc => `/${doc.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_uri: `/`,
        icon: `./src/images/assets/logo-cognitive.svg`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
