import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/organisms/layout'
import { device } from '../components/ions/breakpoints'

const Wrapper = styled.div`
  margin: 60px auto 0 auto;
  max-width: 800px;
  padding: 0 5vw;

  h1 {
    font-size: 1.25rem;
    line-height: 150%;
  }

  h2 {
    font-size: 1rem;
  }

  span {
    display: block;
    margin: 0.5em 0 4em 0;
    font-size: 12px;
    color: var(--grey);
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  p {
    font-size: 17px;

    &:not(:last-child) {
      margin-bottom: 2em;
    }
  }

  ul {
    margin: 0 0 0 30px;
    padding: 0;
    font-size: 17px;

    li {
      &:not(:last-child) {
        margin-bottom: 1em;
      }
    }

    & + p {
      margin-top: 2em;
    }
  }

  @media ${device.s} {
    span {
      margin: 1em 0 4em 0;
    }

    p,
    ul {
      line-height: 180%;
    }
  }
`

const Thanks = styled.div`
  border: 1px solid red;
`

export default function Template({ data }) {
  const post = data.markdownRemark
  const { title, date } = post.frontmatter

  return (
    <Layout>
      <Wrapper>
        <h1>{title}</h1>
        <span>{date}</span>
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
        path
      }
      html
    }
  }
`
