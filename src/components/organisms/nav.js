import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { device } from '../ions/breakpoints'

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  padding: 5vw;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  z-index: 1;

  @media ${device.s} {
    padding: 2vw;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;

    li {
      list-style: none;

      a {
        color: var(--white, #ededed);
        text-decoration: none;
        -webkit-transition: 0.2s;
        -moz-transition: 0.2s;
        -o-transition: 0.2s;
        transition: 0.2s;

        &:hover {
          color: var(--highlight, #e0be24);
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
