require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Lucio Afonso | Portfolio`,
    author: `Lucio Afonso`,
    description: `Portfolio built using React and Gatsby`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/UnderGrounder96`,
      },
      {
        name: `github`,
        url: `https://github.com/UnderGrounder96`,
      },
    ],
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/portfolio/`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/testimonials/`,
        name: `testimonials`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300,400,400,700,800,900`],
        display: `swap`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
