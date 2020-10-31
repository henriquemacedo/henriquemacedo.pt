import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/organisms/layout'

const Wrapper = styled.div`
  margin: 60px auto 0 auto;
  max-width: 800px;
  padding: 0 5vw;

  h1 {
    margin: 0.3em 0 0 0;
  }

  h2 {
    font-size: 1rem;
  }

  p {
    font-size: var(--textSize);
  }

  ul {
    margin: 0 0 0 30px;
    padding: 0;
    font-size: 17px;

    li {
      &:not(:last-child) {
        margin-bottom: 0.5em;
      }
    }

    & + p {
      margin-top: 2em;
    }
  }

  > a {
    font-size: 12px;
    color: var(--grey);
    letter-spacing: 3px;
    text-transform: uppercase;

    &:hover {
      color: var(--highlight);
    }
  }

  > div {
    margin-top: 3em;
  }
`

export default function Template({ data }) {
  const post = data.markdownRemark
  const { title, date, time } = post.frontmatter

  return (
    <Layout>
      <Helmet title={['Henrique Macedo — ', title]} />
      <Wrapper>
        <Link to="/blog">/ Back</Link>
        <h1>{title}</h1>
        <span>
          {date} · {time} min read
        </span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Wrapper>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date
        title
        time
        path
      }
      html
    }
  }
`
