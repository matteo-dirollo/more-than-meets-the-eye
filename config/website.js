module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'MTMTE', // Navigation and Site Title
  titleAlt: 'More than meets the eye', // Title for JSONLD
  description: 'A look beyond appearance, where the gap between visible and invisible becomes a place for the development of new languages.',
  headline: 'Dive into the work of poeple who discovered the power of visual languages', // Headline for schema.org JSONLD
  url: 'https://mtmte.netlify.com/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Matteo Di Rollo', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@starter_prismicio', // Twitter Username
  facebook: 'gatsby-prismic', // Facebook Site Name
  googleAnalyticsID: '155298935',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
