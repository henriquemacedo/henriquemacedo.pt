import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../../components/organisms/layout'
import Blog from '../../components/organisms/blog'
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
    <Blog title="Writting.">
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
    </Blog>
  </Layout>
)

BlogPage.propTypes = {
  data: PropTypes.array,
}

export default BlogPage
