import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Pagenation from "../components/Pagenation"
import { PostsMarkdownRemarkQuery } from "../../types/graphql-types"
import ListPost from "../components/ListPost"
import ListTitle from "../components/ListTitle"
import { useSiteMetadata } from "../hooks/use-site-metadata"

type PostsPageProps = {
  data: PostsMarkdownRemarkQuery
  pageContext: {
    previousPagePath: string
    nextPagePath: string
  }
}

const PostsPage: React.FC<PostsPageProps> = (props) => {
  const { description, intro } = useSiteMetadata()

  return (
    <Layout title="Posts" description={description}>
      <div className="pt-16 md:pt-20 pb-28 container px-2 md:px-5 xl:px-20">
        <div className="m-auto">
          <ListTitle title="Photo Gallery" subtitle={intro} />
          <ListPost data={props.data} basePath="" />
          <Pagenation props={props} />
        </div>
      </div>
    </Layout>
  )
}

export default PostsPage

export const PostsQuery = graphql`
  query PostsMarkdownRemark($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date(formatString: "YYYY-MM-DD")
            cover {
              childImageSharp {
                fluid(fit: COVER, maxWidth: 600, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
