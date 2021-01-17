module.exports = {
  siteMetadata: {
    title: `Your Site`,
    description: `Site description`,
    siteUrl: "http://localhost:8000/",
    author: `Your name`,
    image: "http://localhost:8000/og-image.jpg",
    intro: "ここに一覧画面のタイトルを入れる",
    locale: `jp`,
    menuLinks: [
      {
        name: "Home",
        slug: "/",
      },
      {
        name: "About",
        slug: "/about",
      },
    ],
    footerLinks: [
      {
        name: "twitter",
        url: "",
      },
      {
        name: "facebook",
        url: "",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "github",
        url: "https://github.com/",
      },
      {
        name: "google",
        url: "",
      },
      {
        name: "link",
        url: "http://google.com",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/index.css"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `photo-works`,
        short_name: `photo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `docs/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop", "build-javascript"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
}
