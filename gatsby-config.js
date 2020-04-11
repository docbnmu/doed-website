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
    `gatsby-plugin-netlify`,
    `gatsby-plugin-remove-serviceworker`,
  ],
}
