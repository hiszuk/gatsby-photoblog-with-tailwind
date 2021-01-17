import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { SiteQuery } from "../../types/graphql-types"

type SeoProps = {
  title?: string
  description?: string
  image?: string
}

const SEO: React.FC<SeoProps> = (props) => {
  const data: SiteQuery = useStaticQuery(
    graphql`
      query Site {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
            locale
          }
        }
      }
    `
  )

  const metaDescription =
    props.description || data.site?.siteMetadata?.description
  const metaTitle = props.title || data.site?.siteMetadata?.title
  const defaultUrl = data.site?.siteMetadata?.siteUrl
  const defaultImage = data.site?.siteMetadata?.image
    ? data.site.siteMetadata.image
    : defaultUrl + "/og-image.jpg"
  const metaImage = props.image ? defaultUrl + props.image : defaultImage
  const lang = data.site?.siteMetadata?.locale
    ? data.site?.siteMetadata?.locale
    : "en"

  return (
    <Helmet
      htmlAttributes={{
        lang: `${lang}`,
      }}
      title={props.title}
      defaultTitle={
        data.site?.siteMetadata?.title ? data.site?.siteMetadata?.title : ""
      }
      titleTemplate={`%s | ${data.site?.siteMetadata?.title}`}
    >
      {/* General tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="image" content={props.image} />
      <meta
        name="description"
        content={metaDescription ? metaDescription : ""}
      />

      {/* OpenGraph tags */}
      <meta property="og:title" content={metaTitle ? metaTitle : ""} />
      <meta property="og:image" content={metaImage ? metaImage : ""} />
      <meta
        property="og:description"
        content={metaDescription ? metaDescription : ""}
      />

      {/* Twitter card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle ? metaTitle : ""} />
      <meta name="twitter:image" content={metaImage ? metaImage : ""} />
      <meta
        name="twitter:description"
        content={metaDescription ? metaDescription : ""}
      />
    </Helmet>
  )
}

export default SEO
