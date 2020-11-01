import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../../utils/seo'
import Layout from '../../components/organisms/layout'
import Posts from '../../components/organisms/posts'
import Post from '../../components/molecules/post'

export const AllArticlesQuery = graphql`
  query AllArticles {
    allMarkdownRemark(sort: { fields: frontmatter___key, order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date
            time
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
    <SEO title="Henrique Macedo — Blog" />
    <Posts>
      {data.allMarkdownRemark.edges.map(post => {
        const { title, date, time, description, path } = post.node.frontmatter
        return (
          <Post
            title={title}
            date={date}
            time={time}
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
  data: PropTypes.object,
}

export default BlogPage
