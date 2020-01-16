import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { device } from '../ions/breakpoints'

const Wrapper = styled.nav`
  margin-top: 5vw;
  padding: 0 10vw;
  font-weight: var(--bold, 700);
  text-transform: uppercase;

  @media ${device.s} {
    font-size: 0.85rem;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      list-style: none;

      &:not(:last-child) {
        margin-right: 40px;
      }

      a {
        position: relative;
        color: var(--white, #ededed);
        text-decoration: none;

        &.active {
          &:after {
            content: '';
            position: absolute;
            left: 5px;
            bottom: -5px;
            background-color: var(--highlight, #e0be24);
            width: 100%;
            height: 5px;
          }
        }
      }
    }
  }
`

const Nav = () => (
  <Wrapper>
    <ul>
      <li>
        <Link activeClassName="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/blog">
          Blog
        </Link>
      </li>
    </ul>
  </Wrapper>
)

export default Nav
