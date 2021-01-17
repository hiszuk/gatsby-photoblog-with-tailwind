import * as React from "react"
import MediaCard from "./MediaCard"
import { PostsMarkdownRemarkQuery } from "../../types/graphql-types"

type ListPostProps = {
  data: PostsMarkdownRemarkQuery
  basePath: string
}

const ListPost: React.FC<ListPostProps> = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const path = props.basePath

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {posts.map((edge: any) => (
        <div key={edge.node.id}>
          {edge.node.frontmatter?.cover?.childImageSharp?.fluid && (
            <MediaCard
              title={edge.node.frontmatter?.title}
              date={edge.node.frontmatter?.date}
              fluid={edge.node.frontmatter.cover.childImageSharp.fluid}
              tags={edge.node.frontmatter?.tags}
              slug={`${path}/${edge.node.fields?.slug}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default ListPost
