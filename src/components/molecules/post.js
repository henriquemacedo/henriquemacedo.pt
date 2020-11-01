import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  h1 {
    margin: 0.3em 0;
  }

  a {
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  p {
    font-size: var(--textSize);
  }

  &:not(:last-child) {
    margin-bottom: 60px;
    border-bottom: 1px solid var(--grey);
    padding-bottom: 60px;
  }
`

const Post = ({ title, date, time, description, path }) => (
  <Wrapper>
    <span>
      {date} · {time} min read
    </span>
    <h1>{title}</h1>
    <p>{description}</p>
    <Link to={path}>— Read More</Link>
  </Wrapper>
)

export default Post
