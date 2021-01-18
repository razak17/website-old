module.exports = {
  siteMetadata: {
    title: "Razak Mo",
    description: `Personal Website for Razak Mo.`,
    siteUrl: "https://razakmo.tech",
    twitterUsername: "@theRazakMo",
    image: "/me.png",
    author: `razakmo`,
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Razak Mo`,
        short_name: `RazakMo`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "minimal-ui",
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@theme': `src/theme`,
          '@components': `src/components`,
          '@images': `src/images`,
          '@utils': `src/utils`,
        },
      },
    },
  ],
};
