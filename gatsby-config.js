require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Department of Education`,
    siteTitleAlt: `Department of Education, BNMU.`,
    siteHeadline: `University Department of Education, B. N. Mandal University.`,
    siteUrl: `https://doedbnmu.in`,
    siteDescription: `Bhupendra Narayan Mandal University is at the district headquarters, Madhepura. It acts as an affiliating institution and offers undergraduate, graduate and PhD programs through its constituents, affiliated colleges, and institutes in Madhepura and nearby cities.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
  },
  plugins: [
    {
    resolve: `@lekoarts/gatsby-theme-minimal-blog`,
    options: {
      navigation: [
        {
          title: `Notice`,
          slug: `/notice`,
        },
{
          title: `Syllabus`,
          slug: `/syllabus`,
        },
        {
          title: `Staff`,
          slug: `/staff`,
        },
        {
          title: `About`,
          slug: `/about`,
        },
        ],
    },
  },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `University Department of Education`,
        short_name: `Dept. of Edu.`,
        description: `University Department of Education at Bhupendra Narayan Mandal University (BNMU), Madhepura`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#19212c`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
