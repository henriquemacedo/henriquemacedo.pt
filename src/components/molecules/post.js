import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { device } from '../ions/breakpoints'

const Wrapper = styled.div`
  h1 {
    font-size: 1.25rem;
    color: var(--white);

    @media ${device.s} {
      margin-bottom: -5px;
    }
  }

  span {
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  p {
    margin: 15px 0;
    font-size: 16px;
  }

  a {
    border: 0;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--white);

    &:hover {
      color: var(--highlight);
    }
  }

  &:not(:last-child) {
    margin-bottom: 60px;
    border-bottom: 1px solid var(--grey);
    padding-bottom: 60px;
  }
`

const Post = ({ title, date, description, path }) => (
  <Wrapper>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{description}</p>
    <Link to={path}>— Read More</Link>
  </Wrapper>
)

export default Post
