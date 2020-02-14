import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../../components/organisms/layout'
import Posts from '../../components/organisms/posts'
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
    <Posts>
      {data.allMarkdownRemark.edges.map(post => {
        const { title, date, description, path } = post.node.frontmatter
        return (
          <Post
            title={title}
            date={date}
            description={description}
            key={`${date}__${title}`}
            path={path}
          />
        )
      })}
    </Posts>
  </Layout>
)

BlogPage.propTypes = {
  data: PropTypes.array,
}

export default BlogPage
