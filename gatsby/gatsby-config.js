module.exports = {
  siteMetadata: {
    title: "liturgical-day-template-maker",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "",
        dataset: "",
      },
    },
    'gatsby-plugin-image',
    "gatsby-plugin-styled-components",
  ],
};
