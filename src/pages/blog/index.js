import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../../components/organisms/layout'
import Main from '../../components/molecules/main'
import Post from '../../components/molecules/post'
import Footer from '../../components/molecules/footer'
import footerLinks from '../../utils/footerLinks'

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
    <Main>
      {data.allMarkdownRemark.edges.map(post => {
        const { title, author, date, description, path } = post.node.frontmatter
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
    </Main>
    <Footer values={footerLinks} />
  </Layout>
)

BlogPage.propTypes = {
  data: PropTypes.array,
}

export default BlogPage
