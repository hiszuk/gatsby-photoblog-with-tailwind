import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Pagenation from "../components/Pagenation"
import { TagsMarkdownRemarkQuery } from "../../types/graphql-types"
import ListPost from "../components/ListPost"
import { startCase } from "lodash"
import ListTitle from "../components/ListTitle"

type TagsPageProps = {
  data: TagsMarkdownRemarkQuery
  pageContext: {
    tag: string
    basePath: string
    totalItems: number
    previousPagePath: string
    nextPagePath: string
  }
}

const TagsPage: React.FC<TagsPageProps> = (props) => {
  const title = `${startCase(props.pageContext.tag)}`
  const subtitle = `${props.pageContext.totalItems} 件`
  return (
    <Layout title={title} description={subtitle}>
      <div className="pt-16 md:pt-20 pb-28 container px-2 md:px-5 xl:px-20">
        <div className="m-auto">
          <ListTitle title={title} subtitle={subtitle} />
          <ListPost data={props.data} basePath={props.pageContext.basePath} />
          <Pagenation props={props} />
        </div>
      </div>
    </Layout>
  )
}

export default TagsPage

export const PostsQuery = graphql`
  query TagsMarkdownRemark($skip: Int!, $limit: Int!, $tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { tags: { eq: $tag } } }
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
