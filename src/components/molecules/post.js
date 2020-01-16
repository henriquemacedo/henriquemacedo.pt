import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  border-bottom: 1px solid var(--grey, #41505e);
  display: flex;
  padding: 5vw 0;

  &:first-child {
    padding-top: 0;
  }

  a {
    border: 0;
  }

  h1 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: var(--bold, 700);
    text-transform: uppercase;
  }

  p {
    margin: 15px 0 30px 0;
  }

  span {
    font-size: 0.85rem;

    &.read-more {
      font-style: underline;
      color: var(--grey, #41505e);
      text-transform: uppercase;
    }
  }
`

const Post = ({ title, date, description, path }) => (
  <Wrapper>
    <Link to={path}>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{description}</p>
      <span className="read-more">Read more</span>
    </Link>
  </Wrapper>
)

export default Post
