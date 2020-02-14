import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { device } from '../ions/breakpoints'

const Wrapper = styled.div`
  h1 {
    font-size: 1.25rem;
    color: var(--white);
    line-height: 150%;
  }

  span {
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  p {
    margin: 30px 0;
    font-size: 17px;
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

  @media ${device.s} {
    p {
      line-height: 180%;
    }
  }
`

const Post = ({ title, date, description, path }) => (
  <Wrapper>
    <span>{date}</span>
    <h1>{title}</h1>
    <p>{description}</p>
    <Link to={path}>— Read More</Link>
  </Wrapper>
)

export default Post
