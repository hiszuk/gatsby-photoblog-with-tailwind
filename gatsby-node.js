const path = require("path")
const _ = require("lodash")
const { paginate } = require("gatsby-awesome-pagination")

const PostsPerPage = 6

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === "MarkdownRemark" &&
    _.has(node, "frontmatter") &&
    _.has(node, "fileAbsolutePath")
  ) {
    const dir = node.fileAbsolutePath
      .replace(/^.+content\//, "")
      .replace(/\/index.md/, "")
    const slug = `${_.kebabCase(dir)}`
    createNodeField({ node, name: "slug", value: slug })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Create indivisual post pages
  const buildPages = (posts) => {
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: post.node.fields.slug,
        component: path.resolve("src/templates/post.tsx"),
        context: {
          basePath: "",
          tags: post.node.frontmatter.tags,
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  }

  // Create indivisual post pages for tags
  const buildTaggedPages = (tag, posts) => {
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: `${tag}/${post.node.fields.slug}`,
        component: path.resolve("src/templates/post.tsx"),
        context: {
          basePath: tag,
          tags: post.node.frontmatter.tags,
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  }

  // ページネーション関数buildPaginationを作成
  const buildPagination = (posts) => {
    paginate({
      createPage,
      items: posts,
      itemsPerPage: PostsPerPage,
      // 2ページ目以降はURLに"/page"が付与されるよう設定
      pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
      component: path.resolve("src/templates/posts.tsx"),
      context: {
        basePath: "",
      },
    })
  }

  // Create tag pages and pagenate
  const buildTagPages = (posts) => {
    let tags = []
    _.each(posts, (post) => {
      if (_.get(post, "node.frontmatter.tags")) {
        tags = tags.concat(post.node.frontmatter.tags)
      }
    })
    tags = _.uniq(tags)
    tags.forEach((tag) => {
      const postWithTag = posts.filter(
        (post) =>
          post.node.frontmatter.tags &&
          post.node.frontmatter.tags.indexOf(tag) !== -1
      )
      const tagPagination = `/tags/${_.kebabCase(tag)}`

      // call creation indivudual page for tag
      buildTaggedPages(tagPagination, postWithTag)

      paginate({
        createPage,
        items: postWithTag,
        itemsPerPage: PostsPerPage,
        pathPrefix: ({ pageNumber }) =>
          pageNumber === 0 ? `${tagPagination}` : `${tagPagination}/page`,
        component: path.resolve("src/templates/tags.tsx"),
        context: {
          tag,
          basePath: tagPagination,
          totalItems: postWithTag.length,
        },
      })
    })
  }

  // query for all posts
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              tags
              cover {
                childImageSharp {
                  fluid(fit: COVER, maxWidth: 300, maxHeight: 200) {
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges

    // create individual post page
    buildPages(posts)

    // create posts page and pagination
    buildPagination(posts)

    // create tags page and pagination
    buildTagPages(posts)
  })
}
