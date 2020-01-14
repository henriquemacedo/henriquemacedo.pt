import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../../components/organisms/layout'
import Post from '../../components/molecules/post'

export const AllArticlesQuery = graphql`
  query AllArticles {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            date
            title
            author
            description
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => (
  <Layout>
    <Helmet title="Henrique Macedo — Articles" />
    {data.allMarkdownRemark.edges.map(post => {
      const { title, author, date, description, path } = post.node.frontmatter

      return (
        <Post
          title={title}
          author={author}
          date={date}
          description={description}
          key={`${date}__${title}`}
          path={path}
        />
      )
    })}
  </Layout>
)

export default BlogPage
