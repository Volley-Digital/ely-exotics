const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Ely Exotics`,
    description: `Exotic Pet Store based in Ely, Cambridgeshire`,
    author: `@elyexotics`,
    siteUrl: `https://www.elyexotics.co.uk/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ely-exotics`,
        short_name: `ely-exotics`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white.default,
        theme_color: fullConfig.theme.colors.black.default,
        display: `minimal-ui`,
        icon: `src/images/eye-logo.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `428i7jjapo0m`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: '2c6Xcslv8WWpisMKJVe_f_rs_RdCITW93fw8gtffJHE',
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(fullConfig),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
            require(`autoprefixer`),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    { 
      resolve: `@awolf81/gatsby-theme-addthis`, 
      options: {
        publicId: 'ra-602140e286141d63'
      } 
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://elyexotics.us14.list-manage.com/subscribe/post?u=7cec6f079bd8931ddfc185be8&amp;id=f98ae0fe2e',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`, 
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-no-index`,
    `gatsby-plugin-netlify`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
  ],
};


process.env.GATSBY_CONCURRENT_DOWNLOAD = 1
// Use this as a fix if connection is super slow -- Same with above
// process.env.GATSBY_STALL_RETRY_LIMIT=10
// process.env.GATSBY_STALL_TIMEOUT=30000000
// process.env.GATSBY_CONNECTION_TIMEOUT=30000000
