import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import SEO from '../utils/seo'
import Layout from '../components/organisms/layout'

const Wrapper = styled.div`
  margin: 60px auto 0 auto;
  max-width: 800px;
  padding: 0 5vw;

  > a {
    font-size: 12px;
    color: var(--grey);
    letter-spacing: 3px;
    text-transform: uppercase;

    &:hover {
      color: var(--highlight);
    }
  }

  h1 {
    margin: 0.3em 0 0 0;
  }

  > div {
    margin-top: 2em;

    h2 {
      font-size: 0.85rem;
    }

    p {
      font-size: var(--textSize);
    }

    p + h2 {
      margin-top: 2em;
    }

    ul {
      margin: 0 0 0 2em;
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

    a {
      color: var(--highlight);
      transition-duration: 0.3s;

      &:hover {
        text-decoration: underline;
      }
    }

    blockquote {
      margin: 0;
      border-left: 4px solid var(--white);
      padding-left: 0.75em;
      font-style: italic;

      & + p {
        margin-top: 2em;
      }
    }

    img {
      max-width: calc(100% + 10vw);
      height: auto;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
`

export default function Template({ data }) {
  const post = data.markdownRemark
  const { title, date, time, canonical } = post.frontmatter

  return (
    <Layout>
      <SEO title={`Henrique Macedo — ${title}`} canonicalLink={canonical} />
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
        canonical
      }
      html
    }
  }
`
