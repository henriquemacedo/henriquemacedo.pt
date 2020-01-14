import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/organisms/layout'

export default function Template({ data }) {
  const post = data.markdownRemark
  const { title, author, date } = post.frontmatter

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <p>
        Posted by {author} on {date}
      </p>
      <Link to="/blog">Back</Link>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date
        title
        path
      }
      html
    }
  }
`
