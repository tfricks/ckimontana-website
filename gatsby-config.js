module.exports = {
  siteMetadata: {
    title: "Montana District of Circle K International",
    description: "Circle K district",
    siteUrl: "https://mtcki.org",
    author: "Tyler Fricks",
    twitter: "mtcki",
    adsense: ""
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: "margin-bottom: 1.0725rem;"
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Montana District of Circle K International",
        short_name: "mtcki",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#673ab7",
        display: "minimal-ui",
        icons: [
          {
            src: "/img/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/img/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: ""
      }
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-netlify",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-next",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-twitter",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify-cms"
  ]
};
