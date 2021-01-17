import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import MediaCard from "../components/MediaCard"
// import Pagenation from "../components/Pagenation"
import { MarkdownRemarkQuery } from "../../types/graphql-types"
import ListTitle from "../components/ListTitle"
import { Fragment } from "react"
import Preview from "../components/Preview"
import { FluidObject } from "gatsby-image"

type PostPageProps = {
  data: MarkdownRemarkQuery
  pageContext: {
    basePath?: string
    tags: Array<string>
    previous: any
    next: any
  }
}

const PostPage: React.FC<PostPageProps> = (props) => {
  const path = props.pageContext.basePath || ""
  const tag = path.replace(/\/tags\//, "")
  const post = props.data.markdownRemark
  const title = post?.frontmatter?.title || "No Title"
  const subtitle = `${tag && `[${tag}]`} ${post?.frontmatter?.date || ""}`
  const next = props.pageContext.previous
  const previous = props.pageContext.next
  const portrait =
    (post?.frontmatter?.cover?.childImageSharp?.fluid?.aspectRatio || 0) <= 1.0
      ? true
      : false

  return (
    <Layout title={title} description={subtitle}>
      <div className="pt-16 md:pt-20 pb-28 container px-2 md:px-5 xl:px-20">
        <div className="m-auto">
          {post && (
            <Fragment>
              <div
                className={`m-auto ${
                  portrait ? "max-w-lg" : "max-w-screen-lg"
                }`}
              >
                <ListTitle title={title} subtitle={subtitle} />
                <MediaCard
                  title={title}
                  fluid={
                    post.frontmatter?.cover?.childImageSharp?.fluid as
                      | FluidObject
                      | FluidObject[]
                      | undefined
                  }
                  tags={post.frontmatter?.tags as string[] | undefined}
                  slug={`${path}/${post.fields?.slug}`}
                  detail={post.html || ""}
                  src={
                    post.frontmatter?.cover?.childImageSharp?.original?.src ||
                    ""
                  }
                />
              </div>
              <Preview previous={previous} next={next} basePath={path} />
            </Fragment>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default PostPage

export const PostsQuery = graphql`
  query MarkdownRemark($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        tags
        date(formatString: "YYYY-MM-DD")
        cover {
          childImageSharp {
            fluid(fit: COVER, maxWidth: 1000) {
              aspectRatio
              ...GatsbyImageSharpFluid_withWebp
            }
            original {
              src
            }
          }
        }
      }
    }
  }
`
