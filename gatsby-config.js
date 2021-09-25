const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Ely Exotics`,
    description: `Exotic Pet Store based in Ely, Cambridgeshire`,
    author: `@elyexotics`,
    siteUrl: `localhost:8000`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`, 
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-no-index`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
  ],
};
